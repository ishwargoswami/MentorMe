import './App.css';
import Expert from './components/Expert';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Why from './components/Why';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Dashboard from './components/Dashboard';
import Profile from  './components/pages/Profile';
import Service from  './components/pages/Service';
import Booking from  './components/pages/Booking';
import Calendar from  './components/pages/Calendar';
import Dm from './components/pages/Dm';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Expert" element={<Expert />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Why"  element = {<Why/>} />
          <Route path="/About"  element = {<About/>} />
          <Route path="/ContactForm"  element = {<ContactForm/>} />
          <Route path ="/Footer" element={<Footer/>}/>
          <Route path ="/Dashboard" element={<Dashboard/>}/>
          <Route path ="/Dashboard/Profile" element={<Profile/>}/>
          <Route path ="/Dashboard/Booking" element={<Booking/>}/>
          <Route path ="/Dashboard/Service" element={<Service/>}/>
          <Route path ="/Dashboard/Calendar" element={<Calendar/>}/>
          <Route path ="/Dashboard/DM" element={<Dm/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
