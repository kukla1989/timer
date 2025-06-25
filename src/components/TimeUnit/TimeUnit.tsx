import './TimeUnit.scss';

type TimeUnitProps = {
  timeValue: number;
  timeType: string;
}

export default function TimeUnit({timeValue, timeType}: TimeUnitProps) {
  return <div className='time-unit'>
    <div className="time">{timeValue}</div>
    <div className="time-type">{timeType}</div>
  </div>;
}