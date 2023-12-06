import { useState } from 'react';
import InputField from './components/InputField';
import DisplayList from './components/DisplayList';
function App() {
  const [inputVal, setInputVal] = useState('');

  const getValue = (event) => {
    const newValue = event.target.value;

    setInputVal(newValue);
    console.log(inputVal);
  };
  return (
    <div className="App">
      <h1>Enter Value</h1>
      <InputField getValue={getValue} />
      <DisplayList inputVal={inputVal} />
    </div>
  );
}

export default App;
