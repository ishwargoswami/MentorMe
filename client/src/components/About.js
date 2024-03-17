import './About.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect, forwardRef } from 'react';

function About(){
    useEffect(()=>{
        AOS.init({
            offset:300,
            duration:1000});
    },[]);
    return(
        <div className='about'data-aos='fade-up' >
            <div className='abt-container'  data-aos="fade-up"> 
                <div className='abt-left'  data-aos="fade-right">
                    <h6>ABOUT US</h6>
                    <h2>Welcome to MentorMe, where passion meets purpose, and knowledge transforms into empowerment.</h2>
                    <p>Our journey began with a shared vision to create a space where mentorship transcends boundaries, connecting seasoned professionals with eager learners on a platform that goes beyond the ordinary.</p>
                </div>

                <div className='line'></div>

                <div className='abt-right' data-aos="fade-left" >
                    <h6>OUR MISSION</h6>
                    <h2>Empowering Dreams, Igniting Futures</h2>
                    <p>At MentoMe, our mission is clear—to empower individuals to achieve their fullest potential through mentorship. We believe that everyone, regardless of their starting point, should have the opportunity to access guidance, knowledge, and inspiration on their journey to personal and professional growth. Our platform serves as a conduit for this transformative exchange, bridging the gap between experience and ambition.</p>
                </div>
            </div>
        </div>
    );
}

export default About;