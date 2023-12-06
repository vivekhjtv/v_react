import React from 'react';
import styles from './ButtonContainer.module.css';
function ButtonContainer({ onButtonClick }) {
  const buttonNames = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '.',
    '0',
    '=',
    '+',
    'AC',
  ];
  return (
    <div>
      <div className={styles.buttonContainer}>
        {buttonNames.map((buttonName) => (
          <button
            key={buttonName}
            onClick={() => onButtonClick(buttonName)}
            className={styles.button}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ButtonContainer;
