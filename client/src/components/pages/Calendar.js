import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { LuCalendar } from "react-icons/lu";
import { SiChainguard, SiChainlink } from "react-icons/si";
import Switch from "react-switch";
import { IoCloseSharp } from "react-icons/io5";
import axios from 'axios';
import "./Calendar.css";

const Calendar = () => {
  const [bp, setBp] = useState("1 Week");
  const [np, setNp] = useState("Days");
  const [gm, setGm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [meetLink, setMeetLink] = useState(""); // State to manage Google Meet link
  const [choice1, setChoiceOne] = useState('Request Reschedule');
  const [choice2, setChoiceTwo] = useState('Any Time');

  const handleChangeBP = (event) => {
    setBp(event.target.value);
  };

  const handleChangeNP = (event) => {
    setNp(event.target.value);
  };

  const handleChangeGM = () => {
    setGm(!gm);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Call function to save settings to database
    saveSettingsToDatabase();
  };

  const handleClickOne = (e) => {
    if (e.target.tagName === 'LABEL') {
      setTimeout(() => {
        setChoiceOne(e.target.textContent);
      }, 250);
    }
  };

  const handleClickTwo = (e) => {
    if (e.target.tagName === 'LABEL') {
      setTimeout(() => {
        setChoiceTwo(e.target.textContent);
      }, 250);
    }
  };

  const saveSettingsToDatabase = async () => {
    try {
      // Make a POST request to save settings to the database
      const response = await axios.post('http://localhost:5000/save-settings', {
        bp: bp,
        np: np,
        gm: gm,
        meetLink: meetLink,
        reschedulePolicy: choice1,
        minimumNotice: choice2
      });
      if (response.status === 200) {
        console.log('Settings saved successfully');
      } else {
        console.error('Failed to save settings');
      }
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  };

  return (
    <div className="cd-container">
      <div className="cd-left">
        {/* Content for the left column */}
        <Sidebar />
      </div>
      <div className="cd-right">
        <div className="cd-header">Availability</div>

        <div className="cd-opt">
          <div className="cd-choose">
            <div className="cd-icons">
              <LuCalendar />
            </div>
            <div className="cd-info">
              <div className="cd-info-head">Booking Period</div>
              <div>How far in the future can attendees book</div>
            </div>
            <div>
              <select id="bp-select" value={bp} onChange={handleChangeBP}>
                <option value="1 Week">1 Week</option>
                <option value="2 Weeks">2 Weeks</option>
                <option value="3 Weeks">3 Weeks</option>
                <option value="4 Weeks">4 Weeks</option>
              </select>
            </div>
          </div>
          <div className="cd-choose">
            <div className="cd-icons">
              <LuCalendar />
            </div>
            <div className="cd-info">
              <div className="cd-info-head">Notice Period</div>
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

        <div className="cd-ml">
          <div>
            <div className="cd-info-head">Meeting Location</div>
            <div>Use your preferred video conferencing tool for 1:1 meetings</div>
          </div>
          <div className="cd-choose">
            <div className="cd-icons">
              <sichain />
            </div>
            <div className="cd-gm">🔗 Link</div>
            <div>
              <Switch
                className="cd-toggle"
                onChange={handleChangeGM}
                checked={gm}
                onColor="#000"
                offColor="#808080"
              />
            </div>
            {/* Popup box and input field for Google Meet link */}
            {gm && (
              <div className="google-meet-popup">
                <input
                  type="text"
                  placeholder="Enter Link"
                  value={meetLink}
                  onChange={(e) => setMeetLink(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <div className="modal-title">
                <h2>Reschedule Policy</h2>
                <IoCloseSharp id="modal-cl" onClick={handleCloseModal} />
              </div>
              <p>How can your customers initiate a reschedule</p>

              <div className="pol_container_one">
                <form className="pol_toggle_one" onClick={handleClickOne}>
                  <input type="radio" id="choice1" name="choice1" value="Directly Reschedule" defaultChecked={choice1 === 'Directly Reschedule'} />
                  <label htmlFor="choice1">Directly Reschedule</label>

                  <input type="radio" id="choice2" name="choice1" value="Request Reschedule" defaultChecked={choice1 === 'Request Reschedule'} />
                  <label htmlFor="choice2">Request Reschedule</label>

                  <div id="pol_flap_one"><span className="pol_content_one">{choice1}</span></div>
                </form>
              </div>

              <p>Minimum notice before rescheduling a call</p>

              <div className="pol_container_two">
                <form className="pol_toggle_two" onClick={handleClickTwo}>
                  <input type="radio" id="choice3" name="choice2" value="2 Hours" defaultChecked={choice2 === '2 Hours'} />
                  <label htmlFor="choice3">2 Hours</label>

                  <input type="radio" id="choice4" name="choice2" value="Any Time" defaultChecked={choice2 === 'Any Time'} />
                  <label htmlFor="choice4">Any Time</label>

                  <div id="pol_flap_two"><span className="pol_content_two">{choice2}</span></div>
                </form>
              </div>

              <button onClick={handleCloseModal}>Save Settings</button>
            </div>
          </div>
        )}

        {/* Button to open modal */}
        <div>
          <button id="btn-policy" onClick={handleOpenModal}>
            Update Policy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
