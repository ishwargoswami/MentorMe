import React from 'react';
import Sidebar from '../Sidebar';

import './Service.css';

const Service = () => {
  return (
    <div className="sm-container">
      <div className="sm-left">
        <Sidebar />
      </div>
      <div className="sm-right">
      <div className="service-upper">
                <div className="s-title"><h2>Service</h2></div>
                <div className="s-list">
                    <button id="s-btns">1:1 Call</button>
                    <button id="s-btns">Priority DM</button>
                    <button id="s-btns">Webinars</button>
                </div>
            </div>
            <div className="service-line"></div>
            <div className="service-lower">

            </div>
      </div>
    </div>
  );
};

export default Service;
