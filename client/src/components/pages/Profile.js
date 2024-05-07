import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Profile.css";
import Sidebar from "../Sidebar";
import bg from "./background-img.jpg";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate,useLocation } from "react-router-dom"; // Import useNavigate
import { LuGraduationCap } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";
import Edit from "./Edit";

const Profile = () => {
  const navigate = useNavigate(); // Initialize navigate
  const location = useLocation();  
  const [userprofile, setUserprofile] = useState()

  const updatedProfileData = location.state;
  console.log(updatedProfileData);

  useEffect(() => {
    const fetchUserprofile = async () => {
      try {
        const response = await axios.get('https://mentorme-hooz.onrender.com/profile'); // Assuming you have a /profile endpoint to fetch profile data
        setUserprofile(response.data);
      } catch (error) {
        console.error("Failed to fetch profile data:", error);
      }
    };

    fetchUserprofile();
  }, []);

  if (!userprofile) {
    return <div><Edit/></div>;
  }

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
            <h1>Hello <span>{userprofile[0].firstName}</span> </h1>
            <p>
              This is your profile page. You can see the progress you've made
              with your work and manage your projects or assigned tasks !!!
            </p>
            <button
              id="edit-profile"
              onClick={() => navigate("/Dashboard/Profile/Edit")} // Use navigate here
            >
              Edit Profile
            </button>
          </div>
        </div>

        <div className="page-shadow">
          <div className="main-container shadow">
            <div className="container-pf">
              <img src={"https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"} alt="John" className="profile-image" />
              <div className="social-icons">
              <a href={userprofile[0].link} target="_blank">
                <FaLinkedin id="x" />
                </a>
              </div>
            </div>
            <div className="container-pf-text-center">
              <h2>{userprofile[0].firstName} {userprofile[0].lastName}</h2> 
              <hr id="line" />
            </div>

            <div className="bio-container">
              <div className="bio-icon">
              <div className="bio-place">
              <LuGraduationCap id="dcap"/>
              {userprofile[0].passout_from}
              </div>
              <div className="bio-place">
              <IoLocationSharp id ="loc"/>
              {userprofile[0].city}
              </div>
              </div>
            
              <p>{userprofile[0].about_mentee}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
