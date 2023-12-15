import { useContext } from 'react';
import styles from './WelcomeMessage.module.css';
import { TodoItemsContext } from '../store/ItemStoreContext';

const WelcomeMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Nothing to Do..</p>
  );
};

export default WelcomeMessage;
