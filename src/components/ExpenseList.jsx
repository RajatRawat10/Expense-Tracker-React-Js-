import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expense, onDelete }) => {
  if (expense.length === 0) {
    return <p className="text-center text-[#888]">No expense yet!</p>;
  }

  return (
    <div className="space-y-3">
      {expense.map((items) => {
        return <ExpenseItem key={items.id} items={items} onDelete={onDelete} />;
      })}
    </div>
  );
};

export default ExpenseList;
