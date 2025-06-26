import React, { useState, useEffect } from 'react';

const ExpenseForm = (props) => {
  const isEdit = props.itemToEdit;
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isEdit) {
      setTitle(isEdit.title);
      setAmount(isEdit.amount);
    }
  }, [isEdit]);

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeAmount = (e) => setAmount(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      setError('Title is required');
      return;
    }
    if (!amount) {
      setError('Amount is required');
      return;
    }
    setError('');
    if (isEdit) {
      props.editExpense(isEdit._id, title, parseInt(amount));
    } else {
      props.addExpense(title, parseInt(amount));
    }
    setTitle('');
    setAmount('');
  };
  const handleClear = () => {
  props.setItemToEdit(null)
  setTitle("")
  setAmount(0)
};

  return (
    <div className='expense-form'>
      <form onSubmit={handleSubmit}>
        <h3>{isEdit ? 'Edit Expense' : 'Add Expenses'}</h3>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className='form-group'>
          <label htmlFor="title">Title: </label>
          <input
            type="text"id="title"value={title}onChange={handleChangeTitle} placeholder='Enter title'/>
        </div>
        <div className='form-group'>
          <label htmlFor="amount">Amount ($): </label>
          <input type="number" id="amount"value={amount} onChange={handleChangeAmount} placeholder='Enter amount'/>
        </div>
       <button type="submit">{isEdit ? 'Update Expense' : 'Add Expense'}</button>
{isEdit && (
  <button type="button" onClick={handleClear} > Clear</button>
)}

      </form>
    </div>
  );
};

export default ExpenseForm;
