import './App.css';
import Boton from './components/button';
import Counter from './components/counter';
import { useState } from 'react';


function App() {

  const [numberClick, setNumberClick] = useState(0);

  const clickButton = () => {
    setNumberClick(numberClick + 1);
  }
  
  const restartCounter = () => {
    setNumberClick(0);
  }

  return (
    <div className="App">
      <div className="main-container">
      <Counter numberClick={numberClick}/>
      <Boton
      text='Click'
      clickButton={true}
      manageClick={clickButton}/>
      <Boton
       text='Restart'
       clickButton={false}
       manageClick={restartCounter}/>
       <br></br>
       <h2>This is a counter app made with React with love❤️</h2>
      </div>
    </div>
  );
}

export default App;
