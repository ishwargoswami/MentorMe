import React from 'react';
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import './Footer.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Footer() {
  useEffect(()=>{
    AOS.init({
        offset:100,
        duration:1000});
},[]);
  return (
    <footer className="footer"  data-aos="fade-up">
      <div className="footer-inner">
      <img className='logo-img' src="mm1.png" alt="logo-img"/>
        <div className="footer-column">
          <h3>MentorMe</h3>
          <p>Guiding Dreams, Fostering Success.</p>
          <div className="contact-info">
            <p>Email: info@example.com</p>
            <p>Phone: 123-xxxx-xxx</p>
          </div>
        </div>
        <div className="footer-column">
          <h3>Menu</h3>
          <ul>
            <li>Dashboard</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons1">
          <a href={"https://www.instagram.com/bhargav_dungrani_?igsh=cWhyaWNtbTY1YTV3"} target="_blank">
            <BsInstagram id="ff"/> 
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 MentorMe. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
