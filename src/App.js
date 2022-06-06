
import './App.css';
import Button from './components/Button.jsx';
import Counter from './components/Counter.jsx';
import {useState} from 'react';

function App() {

  const [numberOfClicks,setNumberOfClicks] = useState(0);

    const manageButton = () => {
      setNumberOfClicks(numberOfClicks + 1);
  }

  const resetCounter = () => {
      setNumberOfClicks (0);
  }
  return (
    <div className="App">
      <div className='principal-container'>
        <Counter numberOfClicks={numberOfClicks} />
        <Button
          text = "sumar"
          isClickbutton = {true}
          manageButton = {manageButton} />

        <Button
          text = "reset"
          isClickbutton = {false}
          manageButton = {resetCounter} />

      </div>
    </div>
  );
}

export default App;
