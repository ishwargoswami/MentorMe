// Edit.js
import React, { useState } from "react";
import "./Edit.css";
import Sidebar from "../Sidebar";
import forprofile from "./output1.png";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    qualification: '',
    passout_from: '',
    country: '',
    city: '',
    domain: '',
    address: '',
    about_mentee: '',
    link: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData.profileImage)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/edit', formData);
      if (response.status === 201) {
        navigate('/Dashboard/Profile');
        alert('Profile updated successfully');
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      alert('Failed to update profile');
    }
  };


  return (
    <div className="Edit-container">
      <div className="Edit-left">
        <Sidebar />
      </div>
      <div className="Edit-right">
        <div className="allitems">
          <div className="leftside">
            <h1>EDIT PROFILE</h1>
            <div className="puppy">
              <img
                src={forprofile}
                alt="Puppy"
              />
            </div>
          </div>
          <div className="rightside">
            <div className="registerCard">
              <div className="regCardHeading"></div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="regFormfs">
                    <div className="regFormInput">
                      <input
                        type="file"
                        id="photoUpload"
                        name="profileImage"
                        accept="image/png,image/gif,image/jpg,image/jpeg"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="photoUpload"
                        className="uploadBtn"
                      ></label>
                    </div>
                    <div className="regFormInput">
                      <label htmlFor=""></label>
                      <input
                        type="text"
                        required
                        name="firstName"
                        id="firstname"
                        placeholder="First Name"
                        onChange={handleChange}
                      />
                      <label htmlFor="" className="firstres"></label>
                      <input
                        type="text"
                        required
                        name="lastName"
                        id="lastname"
                        placeholder="Last Name"
                        onChange={handleChange}
                      />
                      <label htmlFor="" className="firstres"></label>
                      {/* <input
                        type="text"
                        required
                        name="linkedin"
                        id="linkedin"
                        placeholder="Linkedin Profile"
                        onChange={handleChange}
                      /> */}
                      <input
                        type="text"
                        required
                        name="link"
                        id="link"
                        placeholder="Linkedin Link"
                        onChange={handleChange}
                      />

                      <input
                        type="email"
                        required
                        name="email"
                        id="organizerEmail"
                        placeholder="example@email.com"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="regFormss">
                    <div className="regFormInput">

                    </div>
                    <div className="regFormInput">
                      <input
                        type="text"
                        required
                        name="qualification"
                        id="qualification"
                        placeholder="qualification"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="regFormInput">
                      <input
                        type="text"
                        required
                        name="passout_from"
                        id="passout_from"
                        placeholder="Passout From"
                        onChange={handleChange}
                      />
                      <label htmlFor="" className="firstres"></label>
                      <input
                        type="text"
                        required
                        name="country"
                        id="country"
                        placeholder="Country"
                        onChange={handleChange}
                      />
                      <label htmlFor="" className="firstres"></label>
                      <input
                        type="text"
                        required
                        name="city"
                        id="city"
                        placeholder="City"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="regFormts">
                    <div className="regFormtsfs"></div>
                    <div className="regFormtsss">
                      <div className="regFormInput">
                        <select
                          type="text"
                          required
                          name="domain"
                          id="domain"
                          placeholder="Domain"
                          onChange={handleChange}
                        >
                          <option value="" disabled> Select Domain </option>
                          <option value="Web Development"> Web Development</option>
                          <option value="Data Science">Data Science</option>
                          <option value="Machine Learning">Machine Learning</option>
                          <option value="Cybersecurity">Cybersecurity</option>
                          <option value="Cloud Computing"> Cloud Computing</option>
                          <option value="DevOps">DevOps</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="Blockchain">Blockchain</option>
                          <option value="Artificial Intelligence"> Artificial Intelligence </option>
                          <option value="Internet of Things (IoT)"> Internet of Things (IoT) </option>
                          <option value="Big Data">Big Data</option>
                          <option value="Software Testing">Software Testing</option>
                          <option value="Networking">Networking</option>
                          <option value="Game Development"> Game Development </option>
                          <option value="AR/VR">AR/VR</option>
                          <option value="Robotics">Robotics</option>
                          <option value="Quantum Computing">Quantum Computing</option>
                          <option value="Embedded Systems"> Embedded Systems</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="regFormFs">
                    <div className="regFormInput">
                      <textarea
                        placeholder=" Your  Address"
                        name="address"
                        id="address"
                        cols="30"
                        rows="5"
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="regFormInput">
                      <textarea
                        name="about_mentee"
                        id="about_mentee"
                        placeholder="Enter Something about your self..."
                        cols="30"
                        rows="5"
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="regFormSubmit">
                    <button type="submit" className="regFormBtn">
                      Save data
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;