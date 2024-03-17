import React from 'react';
import './ContactForm.css'; // Import the CSS file
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function ContactForm()  { 
  useEffect(()=>{
    AOS.init({
        offset:200,
        duration:1000});
},[]);
    return (
      <div className="background" id="contact">
        <div className="container">
          <div className="screen"  data-aos="fade-up">
            <div className="screen-header">
              <div className="screen-header-left" data-aos='zoom-in'>
                <div className="screen-header-button close" data-aos='zoom-out'></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left" data-aos= "slide-left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
              </div>
              <div className="screen-body-item">
                <div className="app-form" >
                  <div className="app-form-group"  data-aos='slide-up'>
                    <input className="app-form-control" placeholder="NAME" value="Krisantus Wanandi" />
                  </div>
                  <div className="app-form-group"  data-aos='slide-up'>
                    <input className="app-form-control" placeholder="EMAIL" />
                  </div>
                  <div className="app-form-group"  data-aos='slide-up'>
                    <input className="app-form-control" placeholder="CONTACT NO" />
                  </div>
                  <div className="app-form-group message"  data-aos='slide-up'>
                    <input className="app-form-control" placeholder="MESSAGE" />
                  </div>
                  <div className="app-form-group buttons"  data-aos='slide-up'>
                    <button className="app-form-button">CANCEL</button>
                    <button className="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default ContactForm;
