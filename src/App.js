import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Navbar from './components/Navbar';
import Features from './pages/Features';
import SocialImpact from './pages/SocialImpact';
import Contact from './pages/Contact';
import Footer from './pages/footer';
import PageFooter from './components/PageFooter';




function App() {
  return (
    <div>
      <Navbar/>
    
    <div className="pt-[80px]">
    <BrowserRouter> 
    <Routes>
      <Route path= "/" element={<HomePage/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/Features" element={<Features/>}></Route>
      <Route path="/SocialImpact" element={<SocialImpact/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    <PageFooter/>
  </div>
  
  );
}

export default App;