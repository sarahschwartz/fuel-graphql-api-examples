import { createClient } from 'urql'

const urqlClient= createClient({
  url: 'https://node-beta-2.fuel.network/graphql',
})

const HEALTH_QUERY  = `
  query {
    health
  }
`

export const checkHealth = async () => {
  const response = await urqlClient.query(HEALTH_QUERY).toPromise();
  console.log("RESPONSE:", response);
}


const BALANCE_QUERY = `query Balance($address: Address, $assetId: AssetId) {
  balance(owner: $address, assetId: $assetId) {
    owner
    amount
    assetId
  }
}`;

export async function getBalance(){
  const args = {
    address:
      "0xf65d6448a273b531ee942c133bb91a6f904c7d7f3104cdaf6b9f7f50d3518871",
    assetId:
      "0x0000000000000000000000000000000000000000000000000000000000000000",
  };
  const response = await urqlClient.query(BALANCE_QUERY, args).toPromise();
  console.log("DATA:", response.data);
}


const BALANCES_QUERY = `query Balances($filter: BalanceFilterInput) {
  balances(filter: $filter, first: 5) {
    nodes {
      amount
      assetId
    }
  }
}`;

export async function getBalances() {
const args = {
  filter: {
    owner:
      "0xf65d6448a273b531ee942c133bb91a6f904c7d7f3104cdaf6b9f7f50d3518871",
  },
};
const response = await urqlClient.query(BALANCES_QUERY, args).toPromise();
console.log("DATA:", response.data);

}

const TRANSACTIONS_BY_OWNER_QUERY = `
query Transactions($address: Address) {
  transactionsByOwner(owner: $address, first: 5) {
    nodes {
      id
      inputs {
        __typename
        ... on InputCoin {
          owner
          utxoId
          amount
          assetId
        }
        ... on InputContract {
          utxoId
          contract {
            id
          }
        }
        ... on InputMessage {
          messageId
          sender
          recipient
          amount
          data
        }
      }
      outputs {
        __typename
        ... on CoinOutput {
          to
          amount
          assetId
        }
        ... on ContractOutput {
          inputIndex
          balanceRoot
          stateRoot
        }
        ... on MessageOutput {
          recipient
          amount
        }
        ... on ChangeOutput {
          to
          amount
          assetId
        }
        ... on VariableOutput {
          to
          amount
          assetId
        }
        ... on ContractCreated {
          contract {
            id
          }
          stateRoot
        }
      }
      status {
        __typename
        ... on FailureStatus {
          reason
          programState {
            returnType
          }
        }
      }
    }
  }
}`;

export async function getTransactionsByOwner() {
const args = {
  address:
    "0xf65d6448a273b531ee942c133bb91a6f904c7d7f3104cdaf6b9f7f50d3518871",
};

const response = await urqlClient.query(TRANSACTIONS_BY_OWNER_QUERY, args).toPromise();
console.log("DATA:", response.data);
}

const LATEST_TRANSACTIONS_QUERY = `
query LatestTransactions {
  transactions(last: 5) {
    nodes {
      id
      inputs {
        __typename
        ... on InputCoin {
          owner
          utxoId
          amount
          assetId
        }
        ... on InputContract {
          utxoId
          contract {
            id
          }
        }
        ... on InputMessage {
          messageId
          sender
          recipient
          amount
          data
        }
      }
      outputs {
        __typename
        ... on CoinOutput {
          to
          amount
          assetId
        }
        ... on ContractOutput {
          inputIndex
          balanceRoot
          stateRoot
        }
        ... on MessageOutput {
          recipient
          amount
        }
        ... on ChangeOutput {
          to
          amount
          assetId
        }
        ... on VariableOutput {
          to
          amount
          assetId
        }
        ... on ContractCreated {
          contract {
            id
          }
          stateRoot
        }
      }
      status {
        __typename
        ... on FailureStatus {
          reason
          programState {
            returnType
          }
        }
      }
    }
  }
}`;

export async function getLatestTransactions() {
  const response = await urqlClient.query(LATEST_TRANSACTIONS_QUERY).toPromise();
  console.log("DATA:", response.data);
}

const CONTRACT_BALANCE_QUERY = `query ContractBalance($contract: ContractId, $asset: AssetId) {
  contractBalance(contract: $contract, asset: $asset) {
    contract
    amount
    assetId
  }
}`;

export async function getContractBalance() {
const args = {
  contract:
    "0xc9a5366c269438d294ef942bc962dd2e6c86121e3bca00192723eb7eb58fa87d",
  asset: "0x0000000000000000000000000000000000000000000000000000000000000000",
};
const response = await urqlClient.query(CONTRACT_BALANCE_QUERY, args).toPromise();
console.log("DATA:", response.data);
}

const CONTRACT_BALANCES_QUERY = `
query ContractBalances($filter: ContractBalanceFilterInput!) {
  contractBalances(filter: $filter, first: 5) {
    nodes {
      amount
      assetId
    }
  }
}`;

export async function getContractBalances() {
const args = {
  filter: {
    contract:
      "0x0a98320d39c03337401a4e46263972a9af6ce69ec2f35a5420b1bd35784c74b1",
  },
};
const response = await urqlClient.query(CONTRACT_BALANCES_QUERY, args).toPromise();
console.log("DATA:", response.data);
}

const LATEST_BLOCKS_QUERY = `query LatestBlocks {
  blocks(last: 5) {
    nodes {
      id
      transactions {
        id
        inputAssetIds
        inputs {
          __typename
          ... on InputCoin {
            owner
            utxoId
            amount
            assetId
          }
          ... on InputContract {
            utxoId
            contract {
              id
            }
          }
          ... on InputMessage {
            messageId
            sender
            recipient
            amount
            data
          }
        }
        outputs {
          __typename
          ... on CoinOutput {
            to
            amount
            assetId
          }
          ... on ContractOutput {
            inputIndex
            balanceRoot
            stateRoot
          }
          ... on MessageOutput {
            recipient
            amount
          }
          ... on ChangeOutput {
            to
            amount
            assetId
          }
          ... on VariableOutput {
            to
            amount
            assetId
          }
          ... on ContractCreated {
            contract {
              id
            }
            stateRoot
          }
        }
        gasPrice
      }
    }
  }
}`;

export async function getLatestBlocks() {
  const response = await urqlClient.query(LATEST_BLOCKS_QUERY).toPromise();
  console.log("DATA:", response.data);
}

const BLOCK_BY_HEIGHT_QUERY = `
query Block($height: U64) {
  block(height: $height) {
    id
  }
}`;

export async function getBlockByHeight() {
const args = { height: "378485" };
const response = await urqlClient.query(BLOCK_BY_HEIGHT_QUERY, args).toPromise();
console.log("DATA:", response.data);
}

const MESSAGES_QUERY = `
query MessageInfo($address: Address) {
  messages(owner: $address, first: 5) {
    nodes {
      amount
      sender
      recipient
      nonce
      data
      daHeight
      fuelBlockSpend
    }
  }
}`;

export async function getMessagesByOwner() {
const args = {
  address:
    "0xf65d6448a273b531ee942c133bb91a6f904c7d7f3104cdaf6b9f7f50d3518871",
};
const response = await urqlClient.query(MESSAGES_QUERY, args).toPromise();
console.log("DATA:", response.data);
}
