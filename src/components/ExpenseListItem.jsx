import React from 'react';

const ExpenseListItem = (props) => {
  const { title, amount, _id} = props.expense;
  const type = amount < 0 ? 'expense' : 'income';

  const handleDelete = () => {
    props.deleteExpense(_id);
  };

  const handleEdit = () => {
    props.setItemToEdit(props.expense);
    console.log(props.expense);
  };

  return (
    <div className={`expense-item ${type}`}>
      <div className="expense-title">{title}</div>
      <div className="expense-amount">${amount}</div>
      <div className="button-overlay">
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  );
};

export default ExpenseListItem;
