import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import dshimg from'../assets/3.jpg';

const Dashboard = () => {
  return (
    <div className="ds-container">
      <div className="ds-left">
        {/* Content for the left column */}
        <Sidebar/>
      </div>
      <div className="ds-right">
        {/* Content for the right column */}
        <h1>Welcome to Dashboard</h1>
        <img src={dshimg} alt="dashboard" />
      </div>
    </div>
  );
};

export default Dashboard;
