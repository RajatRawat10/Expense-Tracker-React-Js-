import React, { useState } from 'react'

const ExpenseForm = ({ AddingExpense }) => {

    const [title, settitle] = useState("")
    const [amount, setamount] = useState("")

    const handlesubmit = (e) => {
        e.preventDefault();
        if (title === "" || amount === "") {
           return alert("Please enter all fields!")
        }
        console.log(title, amount)
        settitle("")
        setamount("")
    }


    return (
        <form className="mb-6" onSubmit={handlesubmit}>
            <div className="flex flex-col gap-3">
                <input value={title}
                    onChange={(e) => {
                        settitle(e.target.value);
                    }
                    }
                    type="text"
                    placeholder="Expense Title"
                    className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                />

                <input
                    value={amount}
                    onChange={(e) => {
                        setamount(e.target.value);
                    }
                    }
                    type="number"
                    placeholder="Amount"
                    className="border rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-black dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                />

                <button
                    type="submit"
                    className="bg-black text-white rounded-xl py-3 hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
                >
                    Add Expense
                </button>
            </div>
        </form>
    )
}

export default ExpenseForm