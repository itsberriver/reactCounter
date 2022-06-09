
import './App.css';
import Button from './components/Button.jsx';
import Counter from './components/Counter.jsx';
import {useState} from 'react';

function App() {

  const [numberOfClicks,setNumberOfClicks] = useState(0);

    const addButton = () => {
      setNumberOfClicks(numberOfClicks + 1);
  }

  const substractButton = () => {
    setNumberOfClicks(numberOfClicks - 1);
}

  const resetCounter = () => {
      setNumberOfClicks (0);
  }
  return (
    <div className="App">
      <div className='principal-container'>
        <Counter numberOfClicks={numberOfClicks} />
        <Button
          className = 'add-Button'
          text = "+"
          isClickbutton = {true}
          manageButton = {addButton} />

        <Button
          text = "-"
          isClickbutton = {true}
          manageButton = {substractButton} />

        <Button
          className = 'substract-button'
          text = "reset"
          isClickbutton = {false}
          manageButton = {resetCounter} />

      </div>
    </div>
  );
}

export default App;
