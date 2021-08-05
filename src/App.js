import { logDOM } from "@testing-library/react";
import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import InputForm from "./components/Forms/InputForm";
import "./components/Forms/NewExpense.css";
function App() {
  const dummy_expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(dummy_expenses);

  const expensesHandler = (expense) => {
    setExpenses((preExpense) => {
      expense = {
        ...expense,
        id:Math.random().toString()
      }
      console.log(expense);
      return [expense, ...preExpense];
    });
  };
  const saveFormData = (expensedata) => {
    const addedExpense = {
      ...expensedata,
      id: Math.random.toString(),
    };
    console.log(addedExpense);
  };

  return (
    <div>
      <div className="new-expense">
        <InputForm onSaveFormData={expensesHandler}></InputForm>
      </div>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
