// /* SignUp.jsx */

// import React, { useState } from "react";
// import "./SignUp.css";
// import Vector from ".././assets/girl.png";
// import { Navigate } from "react-router-dom";
// import axios from 'axios';

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isMentor, setIsMentor] = useState(true);
//   const [conPassword, setConPassword] = useState("");
//   const [redirect, setRedirect] = useState(false);



//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== conPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/register', {
//         email,
//         username,
//         password,
//         conPassword,
//       });

//       if (response.data.message === "User registered successfully") {
//         alert('Registration Successful');
//         setRedirect(true);
//       }
//     } catch (error) {
//       console.log(error);
//       alert('Registration failed');
//     }
//   }

//   if (redirect) {
//     return <Navigate to="/Login" />;
//   }

//   return (
//     <div className="signup-container">
//       <div className="left">
//         <h1 onClick={() => Navigate("/home")}>MentorMe</h1>
//         <p>Getting Started With Us!</p> {/* Added text below Mentor Me */}
//         <img src={Vector} alt="MentorMe Logo" />
//       </div>

//       <div className="right">
//         <div className="welcome-text">
//           <h1>Welcome</h1> {/* Moved text to top of right div */}
//         </div>
//         <div className="options">
//           <div className={`underline ${isMentor ? "mentor" : "mentee"}`}></div>
//           <p
//             className={isMentor ? "active" : ""}
//             onClick={() => setIsMentor(true)}
//           >
//             I'm Mentor
//           </p>
//           <p
//             className={!isMentor ? "active" : ""}
//             onClick={() => setIsMentor(false)}
//           >
//             I'm Mentee
//           </p>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="email"
//               id="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               id="username"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               id="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               id="con-password"
//               placeholder="Confirm Password"
//               value={conPassword}
//               onChange={(e) => setConPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="sign-btn">
//             <button type="submit" style={{ width: "559.067px", height: "50px" }}>Create Account</button>
//           </div>
//         </form>
//         {/* <div className="login-link">
//           <p>
//             Already have an account?{" "}
//             <span onClick={() => Navigate("/Login")}>Login</span>
//           </p>
//         </div> */}
//         <div className="login-link">
//           <p>
//             Already have an account?{" "}
//             <span onClick={() => setRedirect(true)}>Login</span>
//           </p>
//         </div>

//       </div>
//     </div>
//   )

// };
// export default SignUp;


// SignUp.jsx

import React, { useState } from "react";
import "./SignUp.css";
import Vector from ".././assets/girl.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isMentor, setIsMentor] = useState(true);
  const [conPassword, setConPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== conPassword) {
      toast.warning("Password not matched")
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/register', {
        email,
        username,
        password,
        conPassword,
      });

      if (response.data.message === "User registered successfully") {
        toast.success("Registered Successfully! Please Login Now!");
        setTimeout(()=>{navigate("/login")},2000);
        setRedirect(true);
      }
    } catch (error) {
      console.log(error);
      toast.warning("Registration Failed! Try Again Later.");
    }
  }

  if (redirect) {
    navigate('/Login');
  }

  return (
    <div className="signup-container">
      <div className="left">
        <h1 onClick={() => navigate("/home")}>MentorMe</h1>
        <p>Getting Started With Us!</p> {/* Added text below Mentor Me */}
        <img src={Vector} alt="MentorMe Logo" />
      </div>

      <div className="right">
        <div className="welcome-text">
          <h1>Welcome</h1> {/* Moved text to top of right div */}
        </div>
        <div className="options">
          <div className={`underline ${isMentor ? "mentor" : "mentee"}`}></div>
          <p
            className={isMentor ? "active" : ""}
            onClick={() => setIsMentor(true)}
          >
            I'm Mentor
          </p>
          <p
            className={!isMentor ? "active" : ""}
            onClick={() => setIsMentor(false)}
          >
            I'm Mentee
          </p>
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
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <div className="form-group">
            <input
              type="password"
              id="con-password"
              placeholder="Confirm Password"
              value={conPassword}
              onChange={(e) => setConPassword(e.target.value)}
              required
            />
          </div>
          <div className="sign-btn">
            <button type="submit" style={{ width: "559.067px", height: "50px" }}>Create Account</button>
          </div>
        </form>
        <div className="login-link">
          <p>
            Already have an account?{" "}
            <span onClick={() => navigate("/Login")}>Login</span>
          </p>
        </div>
      </div>
    </div>
  )
};

export default SignUp;
