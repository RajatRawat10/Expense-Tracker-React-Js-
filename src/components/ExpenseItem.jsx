import React from "react";

const ExpenseItem = (props) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow transition-colors">
      <div>
        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
          {props.items.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          ₹{props.items.amount}
        </p>
      </div>
      <button className="text-red-600 font-semibold hover:text-red-800 dark:text-red-400 dark:hover:text-red-600 transition">
        Remove
      </button>
    </div>
  );
};

export default ExpenseItem;
