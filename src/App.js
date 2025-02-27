import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import PageFooter from './components/PageFooter';
import SignUp from './pages/SignUp';




function App() {
  return (
    <div>
      <Navbar/>
    
    <div className="pt-[80px]">
    <BrowserRouter> 
    <Routes>
      <Route path= "/" element={<HomePage/>}></Route>
      <Route path= "/signup" element={<SignUp/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    <PageFooter/>
  </div>
  
  );
}

export default App;