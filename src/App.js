import React from 'react';
import { useState } from 'react';
import './App.css';
import TimeShow from './TimeShow';
import _ from 'lodash';

/*Exercise 1:
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

/*Exercise 2:
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
}*/





/*Exercise 3*/
function App() {
  
  const [value, setValue] = useState(Math.ceil(Math.random() * 1000));
  const [result, setResult] = useState();

  function getIsReal() {
    return Math.random() < 0.9 ? true : false;
  }

  function check(e) {
    const isReal=getIsReal();
    if (isReal && value > e.target.value || !isReal && value < e.target.value) {
      setResult('Bigger');
    } else if (isReal && value < e.target.value || !isReal && value > e.target.value) {
      setResult('Smaller');
    } else {
      setResult("You got it !!!!")
    }
  }

  function reset () {
    setValue(Math.ceil(Math.random() * 1000));
    setResult('');
  }

  return (
    <div className="App">
      <button onClick={reset}>Reset</button>
      <input type='number' onChange={check}/>
      <label>{result}</label>
    </div>
  );
}

export default App;
