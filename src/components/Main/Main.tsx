import React, {useEffect} from 'react';

import './Main.scss';
import TimeUnit from "../TimeUnit/TimeUnit";
import {TimeRemaining} from "../../_uttils/_types";

const targetDate = new Date('2025-07-09T00:00:00')

function Main() {
  const [timeLeft, setTimeLeft] = React.useState<TimeRemaining>(getTimeRemaining(targetDate));
  useEffect(() => {
    const intervalID: number = setInterval(() => {
      setTimeLeft(_ => {
        const remaining = getTimeRemaining(targetDate);
        if (remaining.total < 0) {
          clearInterval(intervalID);
          return {total: 0, days: 0, hours: 0, minutes: 0, seconds: 0};
        }

        return remaining;
      });
    }, 1000);

    return () => clearInterval(intervalID);
  }, [])

  return (<div className='main'>
    <div className="title">ready for applying</div>

    <div className="t-minus">t - minus:</div>

    <div className="timer">
      {(['days', 'hours', 'minutes', 'seconds'] as const).map((unit) => (
        <TimeUnit
          key={unit}
          timeType={unit}
          timeValue={timeLeft[unit]}
        />
      ))}
    </div>
  </div>);
}

export default Main;

function getTimeRemaining(targetDate: Date): TimeRemaining {
  const total = targetDate.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / 1000 / 60 / 60) % 24);
  const days = Math.floor(total / 1000 / 60 / 60 / 24);

  return {total, days, hours, minutes, seconds};
}
