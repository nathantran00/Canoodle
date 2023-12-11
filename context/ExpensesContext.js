import React, { createContext, useState, useEffect } from 'react';
import expensesData from '../data/expensesData';

export const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
  // Initialize the expenses state with expensesData
  const [expenses, setExpenses] = useState(expensesData);

  const addExpense = (newExpense) => {
    setExpenses(currentExpenses => [newExpense, ...currentExpenses]);
  };

  /*
  useEffect(() => {
    // simulate a fetch call to get data, then set it
    setExpenses(expensesData);
  }, []);
  */

  return (
    <ExpensesContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
};
