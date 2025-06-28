import './ChangeTimer.scss';
import {useState} from "react";

function ChangeTimer() {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [days, setDays] = useState<string>('');

  return (
    <div className='wrapper'>
      <div className='change-timer' onClick={() => setShowOverlay(true)}>change time</div>

      {showOverlay && <div className="overlay">
          <input className="title" type="text" placeholder="new title" value={title}
                 onChange={(e) => setTitle(e.target.value)}/>

          <input className="days" type="text" placeholder="days" value={days}
                 onChange={(e) => setDays(e.target.value)}/>

        <input className="password" type="text" placeholder="password" value={days}
               onChange={(e) => setDays(e.target.value)}/>

          <div className='button' onClick={handleSubmit}>submit</div>
        </div>
      }
    </div>
  );
}

export default ChangeTimer;