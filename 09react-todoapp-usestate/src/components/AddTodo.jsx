import { useState } from 'react';
import styles from './AddTodo.module.css';
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate('');
    setTodoName('');
  };

  return (
    <div className={`container text-center ${styles['container-outer']}`}>
      <div className={`row ${styles['container-box']}`}>
        <div className="col-6">
          <input
            className={`p-2 ${styles['input-style']}`}
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={`p-2 ${styles['input-style']}`}
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-success kg-button p-2 ${styles['button-add']}`}
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
