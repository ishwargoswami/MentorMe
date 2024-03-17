import React from 'react';
import './Dm.css';
import Sidebar from '../Sidebar';

const Dm = () => {
  return (
    <div className="Dm-container">
      <div className="Dm-left">
        {/* Content for the left column */}
        <Sidebar/>
      </div>
      <div className="Dm-right">
        
            <div className="dm-upper">
                <div className="dm-title"><h2>Priority DMs</h2></div>
                <div className="dm-list">
                    <button id="dm-btns">Pending</button>
                    <button id="dm-btns">Answered</button>
                </div>
            </div>
            <div className="dm-lower">

            </div>

      </div>
    </div>
  );
};

export default Dm;
