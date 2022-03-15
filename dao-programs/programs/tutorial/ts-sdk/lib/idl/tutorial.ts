export type Tutorial = {
  "version": "0.1.0",
  "name": "tutorial",
  "instructions": [
    {
      "name": "daoInitialize",
      "accounts": [
        {
          "name": "daoConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "quorum",
          "type": "u64"
        },
        {
          "name": "authorities",
          "type": {
            "vec": "publicKey"
          }
        }
      ]
    },
    {
      "name": "daoSetQuorum",
      "accounts": [
        {
          "name": "daoConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "quorum",
          "type": "u64"
        }
      ]
    },
    {
      "name": "daoAddAdmin",
      "accounts": [
        {
          "name": "daoConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "admin",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "daoRemoveAdmin",
      "accounts": [
        {
          "name": "daoConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "admin",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "daoSetAmountToCreateProposal",
      "accounts": [
        {
          "name": "daoConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "quorum",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proposalCreate",
      "accounts": [
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "id",
          "type": "u64"
        },
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "streamId",
          "type": "string"
        }
      ]
    },
    {
      "name": "proposalSetState",
      "accounts": [
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "state",
          "type": "string"
        }
      ]
    },
    {
      "name": "guideTipping",
      "accounts": [
        {
          "name": "proposal",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reviewer2",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reviewer1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proposalClose",
      "accounts": [
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "voteCast",
      "accounts": [
        {
          "name": "vote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tutorial",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "author",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "tutorialId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "voteCancel",
      "accounts": [
        {
          "name": "vote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tutorial",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "author",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "reviewerCreate",
      "accounts": [
        {
          "name": "reviewerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "reviewer",
          "type": "publicKey"
        },
        {
          "name": "githubName",
          "type": "string"
        }
      ]
    },
    {
      "name": "reviewerDelete",
      "accounts": [
        {
          "name": "reviewerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "reviewerAssign",
      "accounts": [
        {
          "name": "reviewer1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reviewer2",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tutorial",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "daoAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "numberOfTutorial",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "quorum",
            "type": "u64"
          },
          {
            "name": "minAmountToCreateProposal",
            "type": "u64"
          },
          {
            "name": "admins",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "proposalAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "reviewer1",
            "type": "publicKey"
          },
          {
            "name": "reviewer2",
            "type": "publicKey"
          },
          {
            "name": "numberOfVoter",
            "type": "u64"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "state",
            "type": {
              "defined": "ProposalState"
            }
          },
          {
            "name": "slug",
            "type": "string"
          },
          {
            "name": "streamId",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "reviewerAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "pubkey",
            "type": "publicKey"
          },
          {
            "name": "numberOfAssignment",
            "type": "u8"
          },
          {
            "name": "githubName",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "voteAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "tutorialId",
            "type": "u64"
          },
          {
            "name": "author",
            "type": "publicKey"
          },
          {
            "name": "votedAt",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ProposalState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Submitted"
          },
          {
            "name": "Funded"
          },
          {
            "name": "Writing"
          },
          {
            "name": "HasReviewers"
          },
          {
            "name": "ReadyToPublish"
          },
          {
            "name": "Published"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InsufficientFundsInVault",
      "msg": "Error: Insufficient funds in vault"
    },
    {
      "code": 6001,
      "name": "SlugTooLong",
      "msg": "Error: Given slug is too long"
    },
    {
      "code": 6002,
      "name": "StreamIdTooLong",
      "msg": "Error: Given streamId is too long"
    },
    {
      "code": 6003,
      "name": "AlreadyVoter",
      "msg": "Error: User has already voted"
    },
    {
      "code": 6004,
      "name": "CannotCastVoteAnymore",
      "msg": "Error: You cannot cast a vote anymore"
    },
    {
      "code": 6005,
      "name": "CannotCancelVotelAnymore",
      "msg": "Error: You cannot cancel a vote anymore"
    },
    {
      "code": 6006,
      "name": "CannotDeleteAnAssignedReviewer",
      "msg": "Error: You cannot delete an assigned reviewer"
    },
    {
      "code": 6007,
      "name": "ReviewerNeedToBeDifferents",
      "msg": "Error: You cannot assigned: same reviewer"
    },
    {
      "code": 6008,
      "name": "CannotCloseProposalRemainingVoter",
      "msg": "Error: Remaining Voter Cannot Close proposal"
    },
    {
      "code": 6009,
      "name": "UnauthorizeAccess",
      "msg": "Error: Not authorize to call the instruction"
    },
    {
      "code": 6010,
      "name": "InvalidState",
      "msg": "Error: Cannot setState: Invalid State"
    },
    {
      "code": 6011,
      "name": "BadPreviousState",
      "msg": "Error: Cannot setState: bad previous state"
    }
  ]
};

export const IDL: Tutorial = {
  "version": "0.1.0",
  "name": "tutorial",
  "instructions": [
    {
      "name": "daoInitialize",
      "accounts": [
        {
          "name": "daoConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "quorum",
          "type": "u64"
        },
        {
          "name": "authorities",
          "type": {
            "vec": "publicKey"
          }
        }
      ]
    },
    {
      "name": "daoSetQuorum",
      "accounts": [
        {
          "name": "daoConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "quorum",
          "type": "u64"
        }
      ]
    },
    {
      "name": "daoAddAdmin",
      "accounts": [
        {
          "name": "daoConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "admin",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "daoRemoveAdmin",
      "accounts": [
        {
          "name": "daoConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "admin",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "daoSetAmountToCreateProposal",
      "accounts": [
        {
          "name": "daoConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "quorum",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proposalCreate",
      "accounts": [
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "id",
          "type": "u64"
        },
        {
          "name": "slug",
          "type": "string"
        },
        {
          "name": "streamId",
          "type": "string"
        }
      ]
    },
    {
      "name": "proposalSetState",
      "accounts": [
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "state",
          "type": "string"
        }
      ]
    },
    {
      "name": "guideTipping",
      "accounts": [
        {
          "name": "proposal",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reviewer2",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reviewer1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "proposalClose",
      "accounts": [
        {
          "name": "proposal",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "creator",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "voteCast",
      "accounts": [
        {
          "name": "vote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tutorial",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "author",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "tutorialId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "voteCancel",
      "accounts": [
        {
          "name": "vote",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tutorial",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "author",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "reviewerCreate",
      "accounts": [
        {
          "name": "reviewerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        },
        {
          "name": "reviewer",
          "type": "publicKey"
        },
        {
          "name": "githubName",
          "type": "string"
        }
      ]
    },
    {
      "name": "reviewerDelete",
      "accounts": [
        {
          "name": "reviewerAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "reviewerAssign",
      "accounts": [
        {
          "name": "reviewer1",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reviewer2",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "daoConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tutorial",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "daoAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "numberOfTutorial",
            "type": "u64"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "quorum",
            "type": "u64"
          },
          {
            "name": "minAmountToCreateProposal",
            "type": "u64"
          },
          {
            "name": "admins",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "proposalAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "creator",
            "type": "publicKey"
          },
          {
            "name": "reviewer1",
            "type": "publicKey"
          },
          {
            "name": "reviewer2",
            "type": "publicKey"
          },
          {
            "name": "numberOfVoter",
            "type": "u64"
          },
          {
            "name": "createdAt",
            "type": "i64"
          },
          {
            "name": "state",
            "type": {
              "defined": "ProposalState"
            }
          },
          {
            "name": "slug",
            "type": "string"
          },
          {
            "name": "streamId",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "reviewerAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "pubkey",
            "type": "publicKey"
          },
          {
            "name": "numberOfAssignment",
            "type": "u8"
          },
          {
            "name": "githubName",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "voteAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "tutorialId",
            "type": "u64"
          },
          {
            "name": "author",
            "type": "publicKey"
          },
          {
            "name": "votedAt",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ProposalState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Submitted"
          },
          {
            "name": "Funded"
          },
          {
            "name": "Writing"
          },
          {
            "name": "HasReviewers"
          },
          {
            "name": "ReadyToPublish"
          },
          {
            "name": "Published"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InsufficientFundsInVault",
      "msg": "Error: Insufficient funds in vault"
    },
    {
      "code": 6001,
      "name": "SlugTooLong",
      "msg": "Error: Given slug is too long"
    },
    {
      "code": 6002,
      "name": "StreamIdTooLong",
      "msg": "Error: Given streamId is too long"
    },
    {
      "code": 6003,
      "name": "AlreadyVoter",
      "msg": "Error: User has already voted"
    },
    {
      "code": 6004,
      "name": "CannotCastVoteAnymore",
      "msg": "Error: You cannot cast a vote anymore"
    },
    {
      "code": 6005,
      "name": "CannotCancelVotelAnymore",
      "msg": "Error: You cannot cancel a vote anymore"
    },
    {
      "code": 6006,
      "name": "CannotDeleteAnAssignedReviewer",
      "msg": "Error: You cannot delete an assigned reviewer"
    },
    {
      "code": 6007,
      "name": "ReviewerNeedToBeDifferents",
      "msg": "Error: You cannot assigned: same reviewer"
    },
    {
      "code": 6008,
      "name": "CannotCloseProposalRemainingVoter",
      "msg": "Error: Remaining Voter Cannot Close proposal"
    },
    {
      "code": 6009,
      "name": "UnauthorizeAccess",
      "msg": "Error: Not authorize to call the instruction"
    },
    {
      "code": 6010,
      "name": "InvalidState",
      "msg": "Error: Cannot setState: Invalid State"
    },
    {
      "code": 6011,
      "name": "BadPreviousState",
      "msg": "Error: Cannot setState: bad previous state"
    }
  ]
};