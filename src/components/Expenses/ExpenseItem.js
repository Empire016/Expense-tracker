import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const deleteHandler = () => {
    props.onDeleteExpense(props.id);
  };

  return (
    <li className="expense-item">
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p>{props.date.toDateString()}</p>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button className="expense-item__delete-button" onClick={deleteHandler}>
        Delete
      </button>
    </li>
  );
};

export default ExpenseItem;
