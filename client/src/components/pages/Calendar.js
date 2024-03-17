import React from 'react';
import './Calendar.css';
import Sidebar from '../Sidebar';
import { useState } from 'react';

import { LuCalendar } from "react-icons/lu";
import { SiGooglemeet } from "react-icons/si";

import Switch from "react-switch";

const Calendar = () => {

  const [bp, setbp] = useState("1 Week");
    const [np, setnp] = useState("Days");

    const handleChangeBP = (event) => {
    setbp(event.target.value);
    };

    const handleChangeNP = (event) => {
        setnp(event.target.value);
    };

    const [gm, setgm] = useState(false);

    const handleChangeGM = () => {
          setgm(!gm);
    };

  return (
    <div className="cd-container">
      <div className="cd-left">
        {/* Content for the left column */}
        <Sidebar/>
      </div>
      <div className="cd-right">
        
      <div className='cd-header'>
            Availability
        </div>

        <div className='cd-opt'>
            <div className='cd-choose'>
                <div className="cd-icons"><LuCalendar /></div>
                <div className='cd-info'>
                    <div className = 'cd-info-head'>Reschedule Policy</div>
                    <div>How can customers reschedule calls</div>
                </div>
                <div>
                    <button id="btn-policy">Update Policy</button>
                </div>
            </div>
            <div className='cd-choose'>
                <div className="cd-icons"><LuCalendar /></div>
                <div className = 'cd-info'>
                    <div className = 'cd-info-head'>Booking Period</div>
                    <div>How far in the future can attendees book</div>
                </div>
                <div>
                    <select id="bp-select" value={bp} onChange={handleChangeBP}>
                        <option value="1 Week">1 Week</option>
                        <option value="2 Weeks">2 Weeks</option>
                        <option value="3 Weeks">3 Weeks</option>
                        <option value="4 Weeks">4 Weeks</option>
                        <option value="2 Months">2 Months</option>
                        <option value="3 Months">3 Months</option>
                    </select>
                </div>
            </div>
            <div className='cd-choose'>
                <div className="cd-icons"><LuCalendar /></div>
                <div className = 'cd-info'>
                    <div className = 'cd-info-head'>Notice Period</div>
                    <div>Set the minimum amount of notice that is required</div>
                </div>
                <div>
                    <input id="np-num" type="number"></input>
                    <select id="np-select" value={np} onChange={handleChangeNP}>
                        <option value="Minutes">Minutes</option>
                        <option value="Hours">Hours</option>
                        <option value="Days">Days</option>
                        <option value="Weeks">Weeks</option>
                    </select>
                </div>
            </div>
        </div>

        <div className='cd-ml'>
            <div>
                <div className = 'cd-info-head'>Meeting Location</div>
                <div>Use your preferred video conferencing tool for 1:1 meetings</div>
            </div>
            <div className='cd-choose'>
                <div className='cd-icons'><SiGooglemeet /></div>
                <div className='cd-gm'>Google Meet</div>
                <div>
                    <Switch
                        className='cd-toggle'
                        onChange={handleChangeGM}
                        checked={gm}
                        onColor="#000"
                        offColor="#808080"
                     />
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Calendar;
