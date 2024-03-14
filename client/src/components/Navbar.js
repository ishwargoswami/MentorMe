import './Navbar.css'
import searcheye from '.././assets/eyes.svg';
import { useNavigate } from 'react-router-dom';

function Navbar(){
    const navigate = useNavigate();

    return(
        <div className="navbar">
            <div className="logo">
                MentorMe
            </div>
            <div className="nav-list">
                <buttton id="home">Home</buttton>
                <buttton id="home">Booking</buttton>
                <buttton id="home">About Us</buttton>
                <buttton id="home">Contact Us</buttton>
            </div>

            <div className="search">
                <img src={searcheye} alt="eye"></img>
                <button id="btn-s">Search</button>
                
            </div>

            <div className="login">
                <button id="btn-l" onClick={()=>navigate("/SignUp")}>Login</button>
                
            </div>
        </div>
    )
        
}

export default Navbar;  