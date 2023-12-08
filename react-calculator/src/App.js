import styles from './App.module.css';
import React, { useState } from 'react';
import Display from './components/Display.jsx';
import Heading from './components/Heading.jsx';
import ButtonContainer from './components/ButtonContainer';
import Container from './components/Container';
function App() {
  const [displayVal, setDisplayVal] = useState('');

  const onButtonClick = (buttonText) => {
    if (buttonText === 'AC') {
      setDisplayVal('');
    } else if (buttonText === '=') {
      const calVal = eval(displayVal);
      setDisplayVal(calVal);
    } else {
      const newDisplayVal = displayVal + buttonText;
      setDisplayVal(newDisplayVal);
    }
  };
  return (
    <Container>
      <div className={styles.calculator}>
        <Heading />
        <Display displayVal={displayVal} />
        <ButtonContainer onButtonClick={onButtonClick} />
      </div>
    </Container>
  );
}

export default App;
