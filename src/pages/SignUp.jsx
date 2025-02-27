import React from "react";
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      {/* Left Side with Image and Slogan */}
      <div className="w-3/4 bg-cover bg-center relative" style={{ backgroundImage: "url('/Signup.jpg')" }}>
      <div className="absolute inset-0 top-[200px] flex flex-col justify-start items-center text-white">
  <h1 className="text-xl " style={{ fontFamily: 'Italianno' , fontSize:'100px'}}>
    Don't Shop, <span className="text-pink-600">Adopt.</span>
  </h1>
  <div className=" mt-6 flex items-center p-5">
      <div className="relative flex rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-pink-600 w-full h-full"></div>
        <button
          className="relative z-10 bg-white text-black text-3xl px-10 py-3 rounded-full  transition duration-300"
          style={{ fontFamily: 'Instrument Serif, serif' }}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
        <button
          className="relative z-10 text-white text-3xl px-10 py-3 rounded-full  ml-[-10px] transition duration-300 "
          style={{ fontFamily: 'Instrument Serif, serif' }}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
</div>
      </div>
      
     {/* Right Side - Signup Form */}
<div className="w-1/2 flex flex-col justify-start items-center p-12">
  <h2 className="text-4xl  text-pink-600 mb-6 p-4" style={{ fontFamily: 'Instrument Serif, serif' }}>
    Please Sign Up to continue..
  </h2>

  <div className="space-y-4 w-90">
    <div className="flex items-center bg-blue-200 rounded-full px-4 py-3">
      <FaEnvelope className="text-gray-600" />
      <input
        type="email"
        placeholder="Enter your Email"
        className="w-full bg-transparent focus:outline-none ml-2"
      />
    </div>
    <div className="flex items-center bg-blue-200 rounded-full px-4 py-3">
      <FaUser className="text-gray-600" />
      <input
        type="text"
        placeholder="Enter your Name"
        className="w-full bg-transparent focus:outline-none ml-2"
      />
    </div>
    <div className="flex items-center bg-blue-200 rounded-full px-4 py-3">
      <FaLock className="text-gray-600" />
      <input
        type="password"
        placeholder="Enter Password"
        className="w-full bg-transparent focus:outline-none ml-2"
      />
    </div>
    <div className="flex items-center bg-blue-200 rounded-full px-4 py-3">
      <FaLock className="text-gray-600" />
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full bg-transparent focus:outline-none ml-2"
      />
    </div>

    <div className="flex items-center space-x-2">
      <input type="checkbox" id="terms" className="w-4 h-4" />
      <label htmlFor="terms" className="text-l p-4" style={{ fontFamily: 'serif' }}>
        I have read and agree to the terms and conditions and the privacy
        policy.
      </label>
    </div>
  </div>

  <button className="w-1/3 bg-pink-600 text-white text-3xl  py-2.5 rounded-full shadow-md hover:bg-pink-500" style={{ fontFamily: 'Instrument Serif, serif' }}>
    Sign Up
  </button>

  <p className="text-center text-sm mt-4">
    Already a user?{" "}
    <span className="text-pink-500 cursor-pointer">Sign In</span>
  </p>

  <div className="flex items-center justify-center mt-4">
    <span className="border-t w-20"></span>
    <span className="px-2 text-gray-500">or continue with</span>
    <span className="border-t w-20"></span>
  </div>

  <div className="flex justify-center mt-4">
    <button className="border px-4 py-2 rounded-full shadow-md flex items-center space-x-2">
      <img src="/google-icon.png" alt="Google Sign In" className="w-5 h-5" />
      <span>Sign in</span>
    </button>
  </div>
</div>

      </div>
    
  );
};

export default SignUp;
