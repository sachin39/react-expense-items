import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isFormShown, setIsFormShown] = useState(false);

  const onAddNewExpenseHandler = () => {
    setIsFormShown(true);
  };

  //enteredExpenseData object is expected here, hence the argument
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsFormShown(false);
  };

  const cancelExpenseForm = () => {
    setIsFormShown(false);
  };

  let formContent;
  let buttonContent;
  if (isFormShown) {
    formContent = (
      <ExpenseForm
        onCancelExpenseForm={cancelExpenseForm}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }
  if (!isFormShown) {
    buttonContent = (
      <button onClick={onAddNewExpenseHandler}>Add New Expense</button>
    );
  }

  return (
    <div className="new-expense">
      {formContent}
      {buttonContent}
    </div>
  );
};

export default NewExpense;
