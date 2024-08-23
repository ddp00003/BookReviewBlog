import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from'./components/navbar'; 
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';
import ReviewForm from './components/ReviewForm';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/add-review" element={<ReviewForm />} /> 
       
        </Routes>
       
      </div>
      <Footer /> 
    </Router>
    
    
  );
}

export default App;