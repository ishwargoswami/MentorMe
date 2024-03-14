import './Home.css'
import hero from  '../assets/mentorship-janette-toral.jpg';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { FaAngleDoubleRight } from "react-icons/fa";

function Home(){
    const navigate = useNavigate();

    return(

        <div className='home-parent'>
            <Navbar/>
            <div className="home">
            
                <img src={hero} alt="bg-img"></img>

                <div className="text">
                    <p>Guiding Dreams, Fostering Success.</p>
                    <h1>Empower, Inspire, and shape the future through the transformative power of Mentorship.</h1>
                </div>

                <div className="Getstart">
                    <button id="get-start-btn" onClick={()=>navigate("/SignUp")}>
                        Get Started <FaAngleDoubleRight className='icon'/>
                    </button>
                </div>

            </div>

        </div>
        
        
    )
}

export default Home;