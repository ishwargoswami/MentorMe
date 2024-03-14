import './App.css';
import Expert from './components/Expert';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Why from './components/Why';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
