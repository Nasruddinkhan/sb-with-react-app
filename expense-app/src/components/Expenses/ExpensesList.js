import React from 'react';

import './ExpensesList.css';
import ExpenseItem from './ExpenseItem'
const ExpensesList = (props) => {
   
    if (props.items.length ===0) {
        return <h3 className="expenses-list__fallback">No expense found</h3>;
    }
    return <ul className='expenses-list'>
        {props.items.map((expense) => (
            <ExpenseItem from key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}
    </ul>;  
};
export default ExpensesList;
