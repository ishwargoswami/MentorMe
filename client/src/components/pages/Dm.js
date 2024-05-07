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
            </div>
            <div className="dm-lower">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>Kalvin</td>
                      <td>Regarding today's session...</td>
                      <td>Pending</td>
                      <td><button>Delete</button></td> 
                    </tr>
                    <tr>
                      <td>Manish Yadav</td>
                      <td>What are the frequent...</td>
                      <td>Answered</td>
                      <td id="del_dm"><button>Delete</button></td> 
                    </tr>
                </tbody>
              </table>
            </div>

      </div>
    </div>
  );
};

export default Dm;
