import React from "react";
import "./Profile.css";
import Sidebar from "../Sidebar";
import bg from "./background-img.jpg";
import team from "./team-4.jpg";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import formdata from "../../formdetails";

const Profile = () => {
  const navigate = useNavigate();
  let form = {formdata}; // Accessing the first item in the array if it exists
  // if (!form) {
  //   // If formdata is empty or undefined, return null or handle the error accordingly
  //   return null; // or render an error message
  // }

  console.log(formdata.name);

  return (
    <div className="profile-container">
      <div className="pf-left">
        {/* Content for the left column */}
        <Sidebar />
      </div>
      <div className="pf-right">
        {/* Content for the right column */}

        <div className="profile-mini">
          <div className="bgi">
            <img id="pht" src={bg} alt="bg-img" />
          </div>
          <div className="img-cover"></div>
          <div className="profile-text">
            <h1>Hello <span>{formdata.username}</span> </h1>
            <p>
              This is your profile page. You can see the progress you've made
              with your work and manage your projects or assigned tasks !!!
            </p>
            <button
              id="edit-profile"
              onClick={() => navigate("/Dashboard/Profile/Edit")}
            >
              Edit Profile
            </button>
          </div>
        </div>

        <div className="page-shadow">
          <div className="main-container shadow">
            <div className="container-pf">
              <img src={formdata.image} alt="John" className="profile-image" />
              <div className="social-icons">
              <a href={formdata.linkedin} target="_blank">
                <FaLinkedin id="x" />
                </a>
              </div>
            </div>
            <div className="container-pf-text-center">
              <h2>{formdata.name}</h2>
              <p>{formdata.address}</p>
              <hr id="line" />
            </div>

            <div className="bio-container">
              <h3> Bio </h3>
              <p>{formdata.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
