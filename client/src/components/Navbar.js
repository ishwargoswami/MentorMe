// Navbar.js
import React from 'react';
import './Navbar.css';
import searcheye from '.././assets/eyes-noto-color-emoji.gif';
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
    const navigate = useNavigate();

    // Function to check if user is logged in
    const checkLoggedIn = () => {
        // Implement your authentication logic here
        // For example, you can check if user is authenticated based on a token
        const token = localStorage.getItem('token'); // Assuming token is stored in localStorage

        // Check if token exists and is valid
        return token !== null;
    };

    // Handle dashboard click
    const handleDashboardClick = () => {
        // Check if user is logged in
        const isLoggedIn = checkLoggedIn();

        if (isLoggedIn) {
            navigate("/Dashboard");
        } else {
            // Show alert indicating user needs to login
            alert("Please login to access Dashboard");
        }
    };

    return (
        <div className="navbar">
            <div className="logo">
                <img className='logo-img' src="mm1.png" alt="logo-img" />
                <div className='logo-text'>MentorMe</div>
            </div>
            <div className="nav-list">
                <li id="home">
                    <Link smooth to="#home">Home</Link>
                </li>
                <li id="home">
                    <Link onClick={handleDashboardClick}>Dashboard</Link>
                </li>
                <li id="home">
                    <Link smooth to="#about">About Us</Link>
                </li>
                <li id="home">
                    <Link smooth to="#contact">Contact Us</Link>
                </li>
            </div>

            <div className="search">
                <img src={searcheye} alt="eye"></img>
                <div className="search-link">
                    <Link smooth to="#search">Search</Link>
                </div>
            </div>

            <div className="login">
                <button id="btn-l" onClick={() => navigate("/Login")}>Login</button>
            </div>
        </div>
    )
}

export default Navbar;
