import './App.css';
import Card from './components/Card';

function App() {
  const styles = { color: 'red', fontSize: '40px' };
  return (
    <>
      <h1 style={styles}>Tailwind CSS and Props Practical</h1>
      <h1 className="text-3xl font-bold bg-green-500 rounded-2xl mt-7 p-4">
        Visit Website...
      </h1>
      <Card name="Aakash" click="Contact me" />
      <Card name="Dinesh" click="Visit me" />
      <Card name="Smit" click="Visit me" />
    </>
  );
}

export default App;
