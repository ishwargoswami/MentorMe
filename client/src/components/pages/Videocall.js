import React from 'react';
import './Videocall.css';
import Sidebar from '../Sidebar';
import Vc from './Vc';

const videocall = () => {
  
  return (
    <div className="vc-container">
      <div className="vc-left">
        {/* Content for the left column */}
        <Sidebar/>
      </div>
      <div className="vc-right">
        <Vc/>
      </div>
    </div>
  );
};

export default videocall;
