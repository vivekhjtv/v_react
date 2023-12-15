import { useContext, useRef } from 'react';
import styles from './AddTodo.module.css';
import { TodoItemsContext } from '../store/ItemStoreContext';

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameRef = useRef();
  const dueDateRef = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameRef.current.value;
    const dueDate = dueDateRef.current.value;
    todoNameRef.current.value = '';
    dueDateRef.current.value = '';
    addNewItem(todoName, dueDate);
  };

  return (
    <div className={`container text-center ${styles['container-outer']}`}>
      <form
        className={`row ${styles['container-box']}`}
        onSubmit={handleAddButtonClicked}
      >
        <div className="col-6">
          <input
            className={`p-2 ${styles['input-style']}`}
            ref={todoNameRef}
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input
            className={`p-2 ${styles['input-style']}`}
            ref={dueDateRef}
            type="date"
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className={`btn btn-success kg-button p-2 ${styles['button-add']}`}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
