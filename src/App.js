import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [

  
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  { id: "e5", title: "Groceries", amount: 120.76, date: new Date(2022, 3, 18) },
  { id: "e6", title: "Smartphone", amount: 999.99, date: new Date(2023, 1, 5) },
  { id: "e7", title: "Gym Membership", amount: 250, date: new Date(2023, 6, 20) },
  { id: "e8", title: "Books", amount: 85.3, date: new Date(2022, 9, 22) },
  { id: "e9", title: "Laptop", amount: 1200, date: new Date(2023, 4, 8) },
  { id: "e10", title: "Headphones", amount: 149.99, date: new Date(2022, 11, 25) },
  { id: "e11", title: "Vacation", amount: 2500, date: new Date(2020, 6, 15) },
  { id: "e12", title: "Shoes", amount: 89.99, date: new Date(2021, 10, 30) },
  { id: "e13", title: "Utility Bill", amount: 220.15, date: new Date(2022, 8, 12) },
  { id: "e14", title: "Birthday Gift", amount: 75, date: new Date(2023, 5, 21) },
  { id: "e15", title: "Coffee Machine", amount: 399.99, date: new Date(2022, 3, 9) },
  { id: "e16", title: "Concert Tickets", amount: 180, date: new Date(2021, 7, 14) },
  { id: "e17", title: "Dinner Out", amount: 65.5, date: new Date(2023, 6, 30) },
  { id: "e18", title: "Painting Supplies", amount: 45.75, date: new Date(2022, 2, 10) },
  { id: "e19", title: "Car Repairs", amount: 400, date: new Date(2020, 11, 18) },
  { id: "e20", title: "Winter Jacket", amount: 199.99, date: new Date(2023, 1, 22) },
  { id: "e21", title: "Streaming Subscription", amount: 15.99, date: new Date(2024, 0, 15) },
  { id: "e22", title: "New Year's Party Supplies", amount: 300, date: new Date(2024, 0, 1) },
  { id: "e23", title: "Home Renovation", amount: 5200, date: new Date(2024, 2, 10) },
  { id: "e24", title: "Fitness Tracker", amount: 129.99, date: new Date(2024, 3, 25) },
  { id: "e25", title: "Garden Plants", amount: 45.5, date: new Date(2024, 4, 5) },
  { id: "e26", title: "Family Picnic", amount: 85, date: new Date(2024, 5, 18) },
  { id: "e27", title: "Bike Repair", amount: 60, date: new Date(2024, 6, 12) },
  { id: "e28", title: "Summer Camp Fees", amount: 300, date: new Date(2024, 6, 30) },
  { id: "e29", title: "Pet Food", amount: 50, date: new Date(2024, 7, 8) },
  { id: "e30", title: "School Supplies", amount: 150, date: new Date(2024, 7, 25) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDeleteExpense={deleteExpenseHandler} />
    </div>
  );
};

export default App;