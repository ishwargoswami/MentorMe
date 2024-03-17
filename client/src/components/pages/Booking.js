import React from 'react';
import './Booking.css';
import Sidebar from '../Sidebar';

const Booking = () => {
  return (
    <div className="bk-container">
      <div className="bk-left">
      {/* Content for the left column */}
        <Sidebar/>
      </div>
      <div className="bk-right">
      {/* Content for the right column */}
        <div className="booking-upper">

            <div className="b-title"><h2>Booking</h2></div>

            <div className="b-list">
                <button id='bk-btns'>1:1 Call</button>
                <button id='bk-btns'>Priority DM</button>
                <button id='bk-btns'>Webinars</button>
            </div>

        </div>

        <div className="booking-line"></div>

        <div className="booking-lower">

        </div>

      </div>
    </div>
  );
};

export default Booking;
