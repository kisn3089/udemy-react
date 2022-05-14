import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import React, { useState } from 'react'

const NewExpense = (props) => {
    const [isAdd, setIsAdd] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsAdd(false);
    };

    const startEditing= () => {
        setIsAdd(true);
    }

    const stopEditing = () => {
        setIsAdd(false);
    }

    return (
        <div className="new-expense">
            {!isAdd && (
                <button onClick={startEditing}>Add New Expense</button>
            )}
            {isAdd && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditing}
                />
            )}
        </div>
    );
}

export default NewExpense;