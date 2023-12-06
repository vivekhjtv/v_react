import React from 'react';
import styles from './Display.module.css';
function display({ displayVal }) {
  return (
    <div>
      <input
        className={styles.display}
        type="text"
        value={displayVal}
        readOnly
      ></input>
    </div>
  );
}

export default display;
