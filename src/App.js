import "./App.css";
import * as Apollo from "./apollo";
import * as URQL from "./urql";
import * as JS from "./js";

function App() {
  return (
    <div className="App">
      <h1>Fuel GraphQL Query Examples</h1>

      <h2>JS</h2>
      <button onClick={JS.getHealth}>Check Health</button>
      <button onClick={JS.getBalance}>Get Balance</button>
      <button onClick={JS.getBalances}>Get Balances</button>
      <button onClick={JS.getTransactionsByOwner}>Txns by owner</button>
      <button onClick={JS.getLatestTransactions}>Latest Txns</button>
      <button onClick={JS.getContractBalance}>Contract Balance</button>
      <button onClick={JS.getContractBalances}>Contract Balances</button>
      <button onClick={JS.getLatestBlocks}>Latest Blocks</button>
      <button onClick={JS.getBlockByHeight}>Block Info</button>
      <button onClick={JS.getMessagesByOwner}>Messages</button>

      <h2>Apollo</h2>
      <button onClick={Apollo.checkHealth}>Check Health</button>
      <button onClick={Apollo.getBalance}>Get Balance</button>
      <button onClick={Apollo.getBalances}>Get Balances</button>
      <button onClick={Apollo.getTransactionsByOwner}>Txns by owner</button>
      <button onClick={Apollo.getLatestTransactions}>Latest Txns</button>
      <button onClick={Apollo.getContractBalance}>Contract Balance</button>
      <button onClick={Apollo.getContractBalances}>Contract Balances</button>
      <button onClick={Apollo.getLatestBlocks}>Latest Blocks</button>
      <button onClick={Apollo.getBlockByHeight}>Block Info</button>
      <button onClick={Apollo.getMessagesByOwner}>Messages</button>

      <h2>urql</h2>
      <button onClick={URQL.checkHealth}>Check Health</button>
      <button onClick={URQL.getBalance}>Get Balance</button>
      <button onClick={URQL.getBalances}>Get Balances</button>
      <button onClick={URQL.getTransactionsByOwner}>Txns by owner</button>
      <button onClick={URQL.getLatestTransactions}>Latest Txns</button>
      <button onClick={URQL.getContractBalance}>Contract Balance</button>
      <button onClick={URQL.getContractBalances}>Contract Balances</button>
      <button onClick={URQL.getLatestBlocks}>Latest Blocks</button>
      <button onClick={URQL.getBlockByHeight}>Block Info</button>
      <button onClick={URQL.getMessagesByOwner}>Messages</button>
    </div>
  );
}

export default App;
