import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
  console.table(props.items);
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);

  };
  const filterByYear = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  return (
    <div>
      <Card className='expenses'>
        <ExpenseChart expenses={filterByYear} />
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesList items={filterByYear}/>
      </Card>
    </div>
  );
};

export default Expenses;
