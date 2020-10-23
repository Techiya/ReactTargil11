import React from 'react';

export default function TimeShow(props) {

    const { period, time, setTime } = props;

    const Times = {
        Hour: 3600,
        Minutes: 60,
        Seconds: 1,
        Milliseconds: 1/60,
      }
      
    const factor = Number(Times[period]);
    const timeInSeconds = Number(time);

    function setTimeWithFactor(e) {
        setTime(Number(e.target.value)*factor);
    }

    return (
        <div className="App">
          <label>{period}</label>
          <input type='number' value={timeInSeconds/factor} onChange={setTimeWithFactor}/>
        </div>
      );
}