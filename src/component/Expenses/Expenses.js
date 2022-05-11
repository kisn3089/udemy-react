import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const yearFilter = selectedYear => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} getYearValue={yearFilter}/>
                {props.items.map(expense => <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
                )}
            </Card>
        </div>
    )
}

export default Expenses;