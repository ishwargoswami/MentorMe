import React from 'react';
import './Expert.css';
import { FaInstagramSquare } from "react-icons/fa";

const Expert = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="our-team">
            <div className="picture">
              <img className="img-fluid" src="https://picsum.photos/130/130?image=1027" alt="Team Member" />
            </div>
            <div className="team-content">
              <h3 className="name">Michele Miller</h3>
              <h4 className="title">Web Developer</h4>
            </div>
            <ul className="social">
              <li><FaInstagramSquare /> </li>
              <li><FaInstagramSquare /> </li>
              <li><FaInstagramSquare /> </li>
              <li><FaInstagramSquare /> </li>
            </ul>
          </div>
        </div>
        {/* Other team members go here */}
      </div>
    </div>
  );
}

export default Expert;
