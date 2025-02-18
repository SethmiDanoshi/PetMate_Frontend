
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './components/Navigationbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
