import './Review.css'
import Testimonials from './Testimonials';
import reviews from '../rev-data'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function Review(){
    useEffect(()=>{
        AOS.init({
            offset:300,
            duration:1000});
    },[]);
    const rev = reviews;
    return(
        <div className='review' data-aos='fade-up'>

            <div className='rev-container' data-aos= 'zoom-in-down'>
                <div className='rev-left'  data-aos="fade-right">
                    <h6>TESTIMONIALS</h6>
                    <h2>What People Say About Us</h2>
                </div>

                <div className='line'></div>

                <div className='rev-right' data-aos='zoom-in'>
                    <Testimonials reviews={rev} />
                </div>
            </div>

        </div>
    );
}

export default Review;