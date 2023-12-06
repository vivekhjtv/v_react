import React from 'react';
import styles from '../components/InputField.module.css';
function InputField({ getValue }) {
  return (
    <div>
      <input
        type="text"
        className={styles.inputStyle}
        placeholder="Enter name"
        onKeyDown={getValue}
      />
    </div>
  );
}

export default InputField;
