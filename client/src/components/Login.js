/* Login.jsx */

import React, { useState } from "react";
import "./Login.css"
import Vector from  ".././assets/girl.png"
import { useNavigate } from "react-router-dom";
 const Login = () => {
  const navigate = useNavigate();
  const [isMentor, setIsMentor] = useState(true); // State to track Mentor/Mentee option

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission here, like sending data to backend
    console.log("Login submitted:", { email, password });
  };

  return (
    <div className="signup-container">
      <div className="left">
        <h1 onClick={()=>navigate("/home")}>MentorMe</h1>
        <p>Getting Started With Us!</p> {/* Added text below Mentor Me */}
        <img src={Vector} alt="MentorMe Logo" />
      </div>
      <div className="right">
        <div className="welcome-text">
          <h1>Welcome</h1> {/* Moved text to top of right div */}
        </div>
        <div className="options1">
          <div className={`underline ${isMentor ? 'mentor' : 'mentee'}`}></div>
          <p className={isMentor ? 'active' : ''} onClick={() => setIsMentor(true)}>I'm Mentor</p>
          <p className={!isMentor ? 'active' : ''} onClick={() => setIsMentor(false)}>I'm Mentee</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="log-btn">
          <button type="submit"style={{ width: "559.067px", height: "50px" }}>Login</button>
  

          </div>
        </form>
        <div className="login-link">
          <p>
            Don't have an account? <span onClick={() => {navigate("/signup")}}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
