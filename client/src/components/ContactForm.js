import React from 'react';
import './ContactForm.css'; // Import the CSS file
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function ContactForm()  { 
  useEffect(()=>{
    AOS.init({
        offset:200,
        duration:1000});
},[]);

const navigate = useNavigate();

    return (
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="d83b4a79-7a02-4382-a5b2-d0eccc81afbe"></input>
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
                <div className="app-contact">CONTACT INFO : +62 81 xxxxxx</div>
              </div>
              <div className="screen-body-item">
                <div className="app-form" >
                  <div className="app-form-group"  data-aos='slide-up'>
                    <input type="text" name="name" className="app-form-control" placeholder="NAME" required/>
                  </div>
                  <div className="app-form-group"  data-aos='slide-up'>
                    <input type="text"  name="email" className="app-form-control" placeholder="EMAIL"required />
                  </div>
                  <div className="app-form-group"  data-aos='slide-up'>
                    <input type="text"  name="number" className="app-form-control" placeholder="CONTACT NO" />
                  </div>
                  <div className="app-form-group message"  data-aos='slide-up'>
                    <input type="text" name="message" className="app-form-control" placeholder="MESSAGE"required />
                  </div>
                  <div className="app-form-group buttons"  data-aos='slide-up'>
                    <button className="app-form-button"><Link smooth to="#home">CANCEL</Link></button>
                    <button  type="submit"className="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    );
  }


export default ContactForm;
