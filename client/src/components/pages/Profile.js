import React from 'react';
import './Profile.css';
import Sidebar from '../Sidebar';
import bg from  './background-img.jpg';
import team from './team-4.jpg';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="pf-left">
        {/* Content for the left column */}
        <Sidebar/>
      </div>
      <div className="pf-right">
        {/* Content for the right column */}
        
        <div className='profile-mini'>
          
              <div className="bgi">
              <img id='pht'src={bg} alt="bg-img"></img>
              </div>
              <div className='img-cover'></div>
              <div className="profile-text">
                <h1>Hello jessy</h1>
                <p>This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks !!!</p>
                <button id="edit-profile">
                    Edit Profile
                </button>
              </div>
        </div>

        <div className="page-shadow">
          <div className="main-container shadow">
            <div className="container-pf">
              <img src={team} alt="John" className="profile-image" />
              <div className="social-icons">
                <FaTwitter id="x" />
                <FaInstagram id="ig" />
              </div>
            </div>
            <div className="container-pf-text-center">
              <h2>Abhinav Dubey</h2>
              <p>IIT Roorkee Roorkee, Uttarakhand, India</p>
              <hr id='line'/>
            </div>
         
            <div className="bio-container">
              <h3> Bio </h3>
              <p>
                Hello, I am a pre-final year student at Indian Institute of
                Technology Roorkee (IIT'R). I am a tech enthusiast and like to
                learn new stuff related to technology.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
