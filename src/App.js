import React from 'react';
import { useState } from 'react';
import './App.css';
import TimeShow from './TimeShow';

/* Excrecise 1:
function App() {
  const [value, setValue] = useState('');

  function setStateValue(e) {
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <input type="text" value={value} onChange={setStateValue}/>
      <input type="text" value={value} onChange={setStateValue}/>
      <input type="text" value={value} onChange={setStateValue}/>
      <input type="text" value={value} onChange={setStateValue}/>
      <input type="text" value={value} onChange={setStateValue}/>
    </div>
  );
}
*/

function App() {
  const [timeInSeconds, setTimeInSeconds] = useState(0);

  function setTimeValue(e) {
    setTimeInSeconds(e.target.value);
  }

  return (
    <div className="App">
      <TimeShow period='Hour' time={timeInSeconds} setTime={setTimeInSeconds}/>
      <TimeShow period='Minutes' time={timeInSeconds} setTime={setTimeInSeconds}/>
      <TimeShow period='Seconds' time={timeInSeconds} setTime={setTimeInSeconds}/>
    </div>
  );
}

export default App;
