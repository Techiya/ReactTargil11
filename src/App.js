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
}*/


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

  const [value, setValue] = useState(0);
  const [result, setResult] = useState();
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(1000);

  function getIsReal() {
    return Math.random() < 0.9 ? true : false;
  }

  function check(e) {
    const isReal = getIsReal();
    if (isReal && value > e.target.value || !isReal && value < e.target.value) {
      setResult(0);
    } else if (isReal && value < e.target.value || !isReal && value > e.target.value) {
      setResult(1);
    } else {
      setResult(2)
    }
  }

  const results = {
    0: 'Try bigger number ^^^ תנסה יותר גדול',
    1: 'Try smaller number ֿֿתנסה יותר קטן',
    2: '**** You got it **** !!!! הצלחת',
  }

  function reset() {
    console.log('start = ' + start);
    console.log('end' + end);
    const thenumber = Math.ceil(Math.random() * (end - start + 1) + Number(start - 1));
    console.log('the number:' + thenumber)
    setValue(thenumber);
    setResult('');
  }

  const divStyle = {
    backgroundColor: result===2 ? 'lime' : 'lightcoral',
    width: '500px',
    height: '50px',
  };

  return (
    <div className="App">
      <div style={divStyle}>
       </div>
      <div style={divStyle}>
        <label>From  </label>
        <input type='number' value={start} onChange={e => setStart(e.target.value)} />
      </div>
      <div style={divStyle}>
        <label>  To  </label>
        <input type='number' value={end} onChange={e => setEnd(e.target.value)} />
      </div>
      <div style={divStyle}>
        <button onClick={reset}>Choose a Number For Me</button>
      </div>
      <div style={divStyle}>
      <label>  Guess a number  </label>
        <input type='number' onChange={check} />
      </div>
      <div style={divStyle}>
        <label style={{'font-size':'30px'}}>{results[result]}</label>
      </div>
    </div>
  );
}

export default App;
