import React,{useState} from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
const  ExpenseItem  = (props) =>{
    /* const expenseDate = new Date(1995,3,25).toISOString();
    const expenseTitle = "Car Insurance";
    const expensePrice = 233.45; */
  /*   const [title,setTitle] = useState(props.title);
   const clickHandler = () =>
    {
        console.log("click");
        setTitle('updated');
    }  */
    return(
       
       
        <Card className='expense-item'>
            <div>
                <ExpenseDate date={props.date}/>
                </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">$ {props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>click here</button> */}
        </Card>
        
    )
}

export default ExpenseItem  