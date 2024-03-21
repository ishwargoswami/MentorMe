import React from "react";
import "./Edit.css";
import Sidebar from "../Sidebar";
import forprofile from "./he.gif";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  return (
    <div className="Edit-container">
      <div className="Edit-left">
        {/* Content for the left column */}
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
              <div className="regCardHeading">
              </div>
              <div>
                <form action="{Profile}">
                  <div className="regFormfs">
                    <div className="regFormInput">
                      <div className="regFormInput">
                        <input type="file" id="photoUpload" accept="image/*" />
                        <label
                          htmlFor="photoUpload"
                          className="uploadBtn"
                        ></label>
                      </div>
                     
                    </div>
                    <div className="regFormInput">
                      <label htmlFor=""></label>
                      <input
                        type="text"
                        required
                        name="firstname"
                        id="firstname"
                        placeholder="First Name"
                      />
                       <label htmlFor="" className="firstres"></label>
                      <input
                        type="text"
                        required
                        name="lastname"
                        id="lastname"
                        placeholder="Last Name"
                      />
                       <label htmlFor="" className="firstres"></label>
                      <input
                        type="text"
                        required
                        name="linkedin"
                        id="linkedin"
                        placeholder="Linkedin Profile"
                      />
                       <input
                        type="email"
                        required
                        id="organizerEmail"
                        placeholder="example@email.com"
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
                        id="Qualificaiton"
                        placeholder="Qualification"
                      />
                    </div>

                    <div className="regFormInput">
                      <input
                        type="text"
                        required
                        id="passout from"
                        placeholder="Passout From"
                      />
                       <label htmlFor="" className="firstres"></label>
                      <input
                        type="text"
                        required
                        name="country"
                        id="country"
                        placeholder="Country"
                      />
                       <label htmlFor="" className="firstres"></label>
                      <input
                        type="text"
                        required
                        name="city"
                        id="city"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <div className="regFormts">
                    <div className="regFormtsfs"></div>
                    <div className="regFormtsss">
                      <div className="regFormInput">
                        {/* <label htmlFor=""> Choose Domain</label> */}
                        <select
                          placeholder="domain"
                          required
                          id="domain"
                          defaultValue=""
                        >
                          <option value="" disabled> Select Domain </option>
                          <option value="Web Development"> Web Development</option>
                          <option value="Mobile Development"> </option>
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
                      {/* <label htmlFor="">Address</label> */}
                      <textarea
                        placeholder=" Your  Address"
                        name=""
                        id="venue"
                        cols="30"
                        rows="5"
                      ></textarea>
                    </div>
                    <div className="regFormInput">
                      {/* <label htmlFor="">BIO</label> */}
                      <textarea
                        name=""
                        id="description"
                        placeholder="Enter Something about your self..."
                        cols="30"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                  <div className="regFormSubmit">
                    <button type="submit" className="regFormBtn" onClick={() => navigate("/Dashboard/Profile")}>
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

export default Edit;
