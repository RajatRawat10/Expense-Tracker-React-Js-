import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expense, setExpense] = useState([]);
  const addExpense = (expense) => {
    setExpense((prev) => [...prev, expense]);
  };

  const deleteExpense = (id) => {};

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-xl transition-colors">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
          Expense Tracker
        </h1>

        {/* Expense Form UI */}
        <ExpenseForm AddingExpense={addExpense} />
        <h3 className="text-white font-semibold mb-5 text-xl ">
          Total Expense: <span className="text-red-600 font-bold  ">₹500</span>{" "}
        </h3>
        {/* Expense List UI */}
        <ExpenseList expnese={expense} onDelete={deleteExpense}/>
      </div>
    </div> 
  );
};

export default App;
