import { useState } from "react";
import "./ExpenseForm.css";
const InputForm = (props) => {
  const [enteredAmount, setEnteredAmount] = useState("");

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredTitle, setEnteredTitle] = useState("");
  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveFormData(expenseData);
    
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate(''); 
  };


  const saveFormData = (event) =>{

  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" 
          value={enteredTitle}
          onChange={titleHandler}></input>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountHandler}
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="08-05-2021"
            max="08-05-2022"
            value={enteredDate}
            onChange={dateHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default InputForm;
