import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#640D56] text-white px-6 py-3 flex justify-between items-center">
      {/* Logo and Tagline */}
      <div className="flex flex-col items-start">
        <div className="flex items-center space-x-2">
          <img src="/PetMate.png" alt="PetMate Logo" className="h-10" />
          <div className="text-lg font-bold text-[40px]" style={{ fontFamily: 'Irish Grover' }}>PetMate</div>
        </div>
        <p className="text-[20px] font-italianno text-gray-200" style={{ fontFamily: 'italianno' }}>Every Paw Deserves a Perfect Home.</p>

      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-gray-300 text-[20px]" style={{ fontFamily: 'Inika', fontWeight: '400' }}>Home</a>
        <a href="#" className="hover:text-gray-300 text-[20px]" style={{ fontFamily: 'Inika', fontWeight: '400' }}>About</a>
        <a href="#" className="hover:text-gray-300 text-[20px]" style={{ fontFamily: 'Inika', fontWeight: '400' }}>Features</a>
        <a href="#" className="hover:text-gray-300 text-[20px]" style={{ fontFamily: 'Inika', fontWeight: '400' }}>Social Impact</a>
        <a href="#" className="hover:text-gray-300 text-[20px]" style={{ fontFamily: 'Inika', fontWeight: '400' }}>Contact Us</a>
      </div>


      {/* SignUp Button */}
      <a href="#" className="bg-[#D91656] hover:bg-[#fa3e7d] text-white px-7 py-2 rounded-full text-[20px]" style={{ fontFamily: 'Inika', fontWeight: '400' }}>
        SignUp
    </a>

    </nav>
  );
};

export default Navbar;

