import ExpenseListItem from './ExpenseListItem';

const History = ({ expenses, deleteExpense, setItemToEdit }) => {
  return (
    <div className="history-container">
      <h3>History</h3>
      {expenses.map((expense) => (
        <ExpenseListItem
          key={expense._id}
          expense={expense}
          deleteExpense={deleteExpense}
          setItemToEdit={setItemToEdit}
        />
      ))}
    </div>
  );
};

export default History;