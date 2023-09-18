import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";
const dummyExpenses = [
  {
    id: "e1",
    title: "Rent",
    amount: 1850,
    date: new Date(2023, 8, 1)
  },
  { id: "e2", title: "Dog Food", amount: 125, date: new Date(2023, 8, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 67.5,
    date: new Date(2023, 12, 7)
  },
  {
    id: "e4",
    title: "Bi-Weekly Groceries",
    amount: 350,
    date: new Date(2023, 7, 15)
  },
  {
    id: "e5",
    title: "Rent",
    amount: 1850,
    date: new Date(2023, 3, 1)
  },
  { id: "e6", title: "Dog Food", amount: 125, date: new Date(2023, 8, 12) },
  {
    id: "e7",
    title: "Car Insurance",
    amount: 67.5,
    date: new Date(2023, 4, 7)
  },
  {
    id: "e8",
    title: "Bi-Weekly Groceries",
    amount: 350,
    date: new Date(2023, 9, 15)
  }
];
const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;
