import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';

import { Tutorial } from '../idl/tutorial';
import { getPda } from '../pda';

/**
 * @param program Dao program.
 * @param mintPk  token mint pk.
 * @param adminPk admin pk.
 * @param quorum  number of voter to validate the transaction.
 * @param signer (optinal, default to provider.wallet.publicKey) signer of the transaction.
 * @returns signature of the transaction
 */
export const daoSetQuorum = async ({
  program,
  mintPk,
  adminPk,
  quorum,
  signer,
}: {
  program: Program<Tutorial>;
  mintPk: anchor.web3.PublicKey;
  adminPk: anchor.web3.PublicKey;
  quorum: anchor.BN;
  signer?: anchor.web3.Keypair;
}) => {
  const { pdaDaoAccount } = getPda(program.programId, mintPk);
  const daoAccount = await pdaDaoAccount();

  const signature = await program.rpc.daoSetQuorum(quorum, {
    accounts: {
      daoConfig: daoAccount.pda,
      authority: adminPk,
    },
    ...(signer && { signers: [signer] }),
  });

  return signature;
};

export default daoSetQuorum;