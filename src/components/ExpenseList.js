import React from 'react';
import Expense from './Expense';


const ExpenseList = ({ expenses, deleteExpense }) => {

    // print message when there is not expenses
    const message = expenses.length === 0 ? 'No expense items yet! Please add one up top...': '';

    return (
        <div className="mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center">Expense List</h2>
        </div>

        <div className="list-expenses">
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="5">{message}</td>
                    </tr>
                    {expenses.map(expense => (
                        <Expense 
                            key={expense.id}
                            expense={expense}
                            deleteExpense={deleteExpense}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    </div>

    );
}

export default ExpenseList;