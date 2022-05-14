import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = (props) => {
    // 이렇게 세개의 useState를 하나의 useState로 관리할 수 있는데
    // 대신 하나의 값을 바꾼다 해도 나머지 값들을 써줘야함 ex)...userInput <처럼
    // 강사는 바로 아래의 방법처럼 각각 하나의 독립적인 useState를 선호함
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // 아래도 하나의 방법
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const submitHandler = (event) => {
        // 새로고침을 막는 메서드
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        // 자식이 부모에게 값을 전달할때
        props.onSaveExpenseData(expenseData);
        // submit 눌렀을때 userInput창이 ''값으로 되게 만듬
        // 대신 input에 value값을 넣어줘야함
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="text">Title</label>
                    <input type="text" id="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="number">Amount</label>
                        <input type="number" value={enteredAmount} onChange={amountChangeHandler} id="number" min="0.01" step="0.01" />
                    </div>
                </div>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;