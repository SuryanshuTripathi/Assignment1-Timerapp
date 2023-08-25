import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './components/Home';
import LoginSignup from './components/LoginSignup';
import LoginHome from './components/LoginHome';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/home" element={<LoginHome/>} />
          <Route path="/" element={<LoginSignup/>} />
          {/* <Route path="/" element={Home} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
