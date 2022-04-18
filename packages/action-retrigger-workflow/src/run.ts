import * as core from '@actions/core'
import { getOctokit, context } from "@actions/github";
import _ from 'lodash';
import { requirePRFromWorkflowRun } from './requirePRFromWorkflowRun';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
const BOT_WORKFLOW_ID = process.env.ID_TO_RERUN as string;
const RUN_EVENT_TYPE = process.env.RUN_EVENT_TYPE || "pull_request_target"

interface Inputs {
  name: string
}

// eslint-disable-next-line @typescript-eslint/require-await
export const run = async (inputs: Inputs): Promise<void> => {
  core.info(`my name is ${inputs.name}`)
}

const getWorkflowRun = async (page: number = 1) => {
  const Github = getOctokit(GITHUB_TOKEN)
  const pr = await requirePRFromWorkflowRun();

  const per_page = 100;
  console.log("requesting with", {
    owner: context.repo.owner,
    repo: context.repo.repo,
    workflow_id: BOT_WORKFLOW_ID,
    event: RUN_EVENT_TYPE,
    branch: pr.head.ref,
    per_page,
    page
  })
  return await Github.rest.actions
    .listWorkflowRuns({
      owner: context.repo.owner,
      repo: context.repo.repo,
      workflow_id: BOT_WORKFLOW_ID,
      event: RUN_EVENT_TYPE,
      branch: pr.head.ref,
      per_page,
      page
    })
    .then(async (res) => {
      if (res.data.total_count - (page * per_page) < per_page) {
        return res.data.workflow_runs.filter((run) => run.head_sha === pr.head.sha)
      }
      const workflows = res.data.workflow_runs.filter((run) => run.head_sha === pr.head.sha)
      return [...workflows, ...(await getWorkflowRun(page + 1))]
    }).catch(err => {
      core.setFailed(err);
      throw err;
    });
}

// Find latest run with pull_request_target and rerun
// pull_request_target is necessary because otherwise the secret fails
// this is also cleaner than deleting (what was done previously)
const rerunBot = async () => {
  const Github = getOctokit(GITHUB_TOKEN);
  const workflowRuns = await getWorkflowRun()

  if (!workflowRuns || !workflowRuns[0] || workflowRuns.length === 0) {
    // the failed workflow was already deleted
    const message = "No workflow runs were found to re-run!";
    core.setFailed(message);
    throw message;
  }

  const run = _.maxBy(workflowRuns, (run) => run.run_started_at ? moment(run.run_started_at).unix() : 0);
  if (run.conclusion === "failure") {
    console.log("The most recent workflow run failed, re-running...\n", run)
    await Github.actions.reRunWorkflow({
      repo: context.repo.repo,
      owner: context.repo.owner,
      run_id: run.id
    }).then(res => {
      console.log("Success!")
    }).catch(err => {
      core.setFailed(err);
      throw err;
    })
  } else {
    console.log("The found run(s) did not fail; so not re-running");
  }
  console.log("all found runs =========================")
  console.log(workflowRuns);
};

console.log([
  `Workflow ID to rerun: ${BOT_WORKFLOW_ID}`,
  `Workflow ID: ${process.env.WORKFLOW_ID}`
])
rerunBot();