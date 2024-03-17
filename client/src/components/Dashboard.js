import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="ds-container">
      <div className="ds-left">
        {/* Content for the left column */}
        <Sidebar/>
      </div>
      <div className="ds-right">
        {/* Content for the right column */}
        <h1>This is dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
