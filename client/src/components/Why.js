
import React from 'react';
import './Why.css'; // Import the CSS file
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Why() {
  useEffect(()=>{
    AOS.init({
        offset:200,
        duration:1000});
},[]);
  return (
    <div className="centerContainer"  data-aos='fade-up'>  
      <div className="responsive-container-block bigContainer" data-aos='zoom-in-up'>
        <div className="responsive-container-block Container bottomContainer" >
          {/* Container on the left side */}
          <div className="allText bottomText leftContainer" data-aos='fade-right'>
            <p className="text-blk headingText">
              Our Story
            </p>
            <p className="text-blk subHeadingText">
            Why we started 
            </p>
            <p className="text-blk description">                 
            It started out as a simple idea and evolved into our passion In the tapestry of existence, our narrative weaves threads of joy, sorrow, and resilience. Through valleys of adversity and peaks of triumph, we embrace each moment, hand in hand. With unwavering faith and boundless love, we etch our tale onto the canvas of time, painting a portrait of shared experiences and cherished memories that illuminate the path of our journey together.
            </p>
            
          </div>

          {/* Container on the right side */}
          <div className="ultimateImg" data-aos='zoom-in'>
            <img className="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp4.svg" alt="Main" />
            <div className="purpleBox" data-aos='zoom-out'>
              <p className="purpleText" id="about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.
              </p>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;

