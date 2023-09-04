import React from "react";
import Header from './components/Header';
import BudgetCard from "./components/BudgetCard";
//* import Header from './components/Header'; items will be copied & pasted to component folder

function App() {
  return (
    <div>
      <Header />
      <BudgetCard name="Food" amount={8.14} max={400}></BudgetCard> 
    </div>
  );
}

export default App;