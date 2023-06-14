import './assets/stylesheets/App.css';
import Button from './components/Button';
import Count from './components/Count';
import { useState } from 'react';

function App() {

  const [ numClicks, setNumClicks ] = useState(0);

  const assignClickNow = () => {
    setNumClicks(numClicks + 1);
  };
  
  const resetCounter = () => {
    setNumClicks(0)
  };

  return (
    <div className='App'>
      <div className='title-container'>
        <h1 className='title'>Calculadora de clics</h1>
      </div>
      <div className='main-container'>
        <Count numClicks={numClicks} />
        <Button
        text={'Clic'}
        buttonClick={true}
        assignClick={assignClickNow} />
        <Button 
        text={'Reiniciar'}
        assignClick={resetCounter} 
        />

      </div>
      
    </div>
  );
}

export default App;
