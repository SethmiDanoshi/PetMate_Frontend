// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import Navbar from './components/Navbar';
// import PageFooter from './components/PageFooter';
// import SignUp from './pages/SignUp';
// import SignIn from './pages/SignIn';




// function App() {
//   return (
//     <div>
//       <Navbar/>
    
//     <div className="pt-[80px]">
//     <BrowserRouter> 
//     <Routes>
//       <Route path= "/" element={<HomePage/>}></Route>
//       <Route path= "/signup" element={<SignUp/>}></Route>
//       <Route path= "/SignIn" element={<SignIn/>}></Route>
//     </Routes>
//     </BrowserRouter>
//     </div>
//     <PageFooter/>
//   </div>
  
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import PageFooter from './components/PageFooter';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Features from './pages/Features';
import SocialImpact from './pages/SocialImpact';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter> 
      <Navbar />
      <div className="pt-[80px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/SocialImpact" element={<SocialImpact />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
      <PageFooter />
    </BrowserRouter>
  );
}

export default App;
