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
     <h1>this is booking</h1>
      </div>
    </div>
  );
};

export default Booking;
