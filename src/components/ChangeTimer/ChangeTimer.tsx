import './ChangeTimer.scss';
import {useState} from "react";

type ChangeTimerProps = {
  changeTimerInfo: (days: number, title: string) => void;
}

function ChangeTimer({changeTimerInfo}: ChangeTimerProps) {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [days, setDays] = useState<string>('');
  const [error, setError] = useState<string>('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isNaN(parseInt(days)) || parseInt(days) <= 0) {
      return setError('days must be a positive number')
    }

    if (title.length === 0) {
      return setError('title must be not empty')
    }

    setShowOverlay(false);
    changeTimerInfo(parseInt(days), title)
    setDays('');
    setTitle('');
    setError('');
  };

  return (
    <div className='wrapper'>
      <div className='change-timer-btn' onClick={() => setShowOverlay(true)}>
        change time
      </div>

      {showOverlay && <div className="overlay">
        <div className="error">{error}</div>
        <input className="title" type="text" placeholder="new title"
               value={title}
               onChange={(e) => setTitle(e.target.value)}/>

        <input className="days" type="text" placeholder="days" value={days}
               onChange={(e) => setDays(e.target.value)}/>

        <div className='button' onClick={handleSubmit}>submit</div>
      </div>
      }
    </div>
  );
}

export default ChangeTimer;