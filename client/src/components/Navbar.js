import './Navbar.css'
import searcheye from '.././assets/eyes-noto-color-emoji.gif';
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar(){
    const navigate = useNavigate();

    return(
        <div className="navbar">
            <div className="logo">
                <img className='logo-img' src="mm.png" alt="logo-img"/>
                <div className='logo-text'>MentorMe</div>
            </div>
            <div className="nav-list">
                    <li id="home">
                        <Link smooth to="#home">Home</Link>
                    </li>
                    <li id="home">
                        <Link smooth to="/Dashboard">Dashboard</Link>
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
                <button id="btn-l" onClick={()=>navigate("/Login")}>Login</button>
                
            </div>
        </div>
    )
        
}

export default Navbar;  