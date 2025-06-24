import React from 'react';
import './Main.scss';
import TimeUnit from "../TimeUnit/TimeUnit";

function Main() {
  return (<div className='main'>
    <div className="title">ready for applying</div>
    <div className="t-minus">t - minus:</div>
    <div className="timer">
      <TimeUnit/>
      <TimeUnit/>
      <TimeUnit/>
      <TimeUnit/>
    </div>
  </div>);
}

export default Main;