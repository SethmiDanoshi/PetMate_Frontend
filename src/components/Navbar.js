import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#640D56] text-white px-6 py-3 flex justify-between items-center z-50 shadow-lg">
      {/* Logo and Tagline */}
      <div className="flex flex-col items-start">
        <div className="flex items-center space-x-2">
          <img src="/PetMate.png" alt="PetMate Logo" className="h-10" />
          <div className="text-lg font-bold text-[40px]" style={{ fontFamily: 'Irish Grover' }}>PetMate</div>
        </div>
        <p className="text-[20px] font-italianno text-white" style={{ fontFamily: 'italianno' }}>
          Every Paw Deserves a Perfect Home.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        {["home", "about", "features", "social-impact", "contact"].map((item) => (
          <Link
            key={item}
            to={item}
            smooth={true}
            duration={100}
            className={`relative text-[20px] cursor-pointer hover:text-gray-300 pb-1 transition-all ${
              active === item ? "after:w-full after:left-0" : "after:w-0 after:left-1/2"
            } after:content-[''] after:absolute after:bottom-0 after:h-[4px] after:bg-white after:rounded-full after:transition-all after:duration-300`}
            style={{ fontFamily: 'Inika', fontWeight: '400' }}
            onClick={() => setActive(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
          </Link>
        ))}
      </div>

      {/* SignUp Button */}
      <a
        href="#"
        className="bg-[#D91656] hover:bg-[#fa3e7d] text-white px-7 py-2 rounded-full text-[20px]"
        style={{ fontFamily: 'Inika', fontWeight: '400' }}
      >
        SignUp
      </a>
    </nav>
  );
};

export default Navbar;
