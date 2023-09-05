import React from "react";
import Header from "./components/Header";
import BudgetCard from "./components/BudgetCard";

function App() {
  return (
    <div>
      <Header />

      <BudgetCard
        name='Food'
        amount={400}
        max={400}
        gray></BudgetCard>
    </div>
  );
}

export default App;
