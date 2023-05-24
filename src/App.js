import React, { useState } from "react";
import NewCost from "./components/Costs/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2023, 6, 8),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2022, 7, 3),
    description: "MacBook",
    amount: 1056.99,
  },
  {
    id: "c3",
    date: new Date(2021, 3, 2),
    description: "PlayStation 5",
    amount: 500.25,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
