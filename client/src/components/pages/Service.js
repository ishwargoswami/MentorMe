import React from "react";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

import "./Service.css";

const Service = () => {
  const navigate = useNavigate();
  
  const [addService, setAddService] = useState(false);

  const handleOpenServiceModal = () => {
    setAddService(true);
  };

  const handleCloseServiceModal = () => {
    setAddService(false);
  };

  
  return (
    <div className="sm-container">

      <div className="sm-left">
        <Sidebar />
      </div>

      <div className="sm-right">
        <div className="sm-upper">

            <div className="s-title">
              Service
            </div>

            {/* Modal */}
            {addService && (
              <div className="serv-modal">
                <div className="serv-modal-content">
                  <div className="serv-modal-title">
                    <h2>Add Service</h2>
                    <IoCloseSharp id="service-cl" onClick={handleCloseServiceModal} />
                  </div>

                  <div className="content">
            <div className="first">
              <div className='form-group1'>
                <form action="{Service}">
                  <div className="serviceform">
                    <div className="details">
                      <input
                        type="text"
                        required
                        name="Title"
                        id="title"
                        placeholder="Add Title"
                      />
                       <select
                          placeholder="domain"
                          required
                          id="domain"
                          defaultValue=""> 
                          <option value="call">1:1 call</option>
                          <option value="webinar">Webinar</option>
                          <option value="PriorityDM">DM</option>
                        </select> 
                        <input
                        type="date"
                        required
                        name="date"
                        id="date"
                        placeholder="date"
                      />
                        <input
                        type="time"
                        required
                        name="time"
                        id="time"
                        placeholder="Time"
                      />
                       <label htmlFor="" className="firstres"></label>
                      <input
                        type="number"
                        required
                        name="duration"
                        id="duration"
                        placeholder="Duration in hour"
                      />
                       <input
                        type="number"
                        required
                        id="amount"
                        placeholder="amount"
                      />
                      
                    </div>
                    
                  </div>` 
                  <div className="serviceform">
                    <button type="submit" onClick={handleCloseServiceModal}>
                      Add Service
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
                  
                  

                </div>
              </div>
            )}

            {/* Button to open modal */}
            <div>
              <button id="btn-serv" onClick={handleOpenServiceModal}>
                Create New Service
              </button>
            </div>
        </div>
      </div>

      <div className="sm-lower">

      </div>

    </div>
  );
};

export default Service;
