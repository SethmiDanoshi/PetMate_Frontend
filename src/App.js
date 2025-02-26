import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Navbar from './components/Navbar';
import Features from './pages/Features';
import SocialImpact from './pages/SocialImpact';




function App() {
  return (
    <div>
      <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<HomePage/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/Features" element={<Features/>}></Route>
      <Route path="/SocialImpact" element={<SocialImpact/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  
  );
}

export default App;