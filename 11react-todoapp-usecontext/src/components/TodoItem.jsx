import styles from './TodoItems.module.css';
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className={`col-6 ${styles['item-name']}`}>{todoName}</div>
        <div className={`col-4 ${styles['item-name']}`}>{todoDate}</div>
        <div className={`col-2 ${styles['item-name']}`}>
          <button
            type="button"
            className={`btn btn-danger kg-button ${styles['button-add']}`}
            onClick={() => onDeleteClick(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
