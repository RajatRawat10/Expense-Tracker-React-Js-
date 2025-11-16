import React, { useState, useEffect } from "react";


const App = () => {

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-xl transition-colors">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">Expense Tracker</h1>


        {/* Expense Form UI */}
        <form className="mb-6">
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Expense Title"
              className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />

            <input
              type="number"
              placeholder="Amount"
              className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />

            <button
              type="button"
              className="bg-black text-white rounded-xl py-3 hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
            >
              Add Expense
            </button>
          </div>
        </form>

        {/* Expense List UI */}
        <div className="space-y-3">
          {/* Example Expense Item */}
          <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow transition-colors">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Sample Expense</h3>
              <p className="text-gray-600 dark:text-gray-300">₹500</p>
            </div>
            <button className="text-red-600 font-semibold hover:text-red-800 dark:text-red-400 dark:hover:text-red-600 transition">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}




export default App