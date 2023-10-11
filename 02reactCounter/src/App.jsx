import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(() => {
      if (counter == 0) {
        return 0;
      } else {
        return counter - 1;
      }
    });
  };
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value is: {counter}</h2>
      <button onClick={addValue}>Increase Counter value</button> <br />
      <br />
      <button onClick={removeValue}>Decrease Counter value</button>
    </>
  );
}

export default App;
