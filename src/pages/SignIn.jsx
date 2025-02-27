import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
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
        <div className="absolute inset-0 bg-white w-full h-full"></div>
        <button
          className="relative z-10  bg-pink-600  text-black text-3xl px-10 py-3 rounded-full  transition duration-300"
          style={{ fontFamily: 'Instrument Serif, serif' }}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
        <button
          className="relative z-10 text-black text-3xl px-10 py-3 rounded-full  ml-[-10px] transition duration-300 "
          style={{ fontFamily: 'Instrument Serif, serif' }}
          onClick={() => navigate("/SignIn")}
        >
          Login
        </button>
      </div>
    </div>
</div>
      </div>
      
     {/* Right Side - SignIn Form */}
<div className="w-1/2 flex flex-col justify-start items-center p-12">
  <h2 className="text-4xl  text-pink-600 mb-6 p-4" style={{ fontFamily: 'Instrument Serif, serif' }}>
    Please Sign In to continue..
  </h2>

  <div className="space-y-4 w-90 p-5 w-3/4">
    <div className="flex items-center bg-blue-200 rounded-full px-4 py-3">
      <FaEnvelope className="text-gray-600" />
      <input
        type="email"
        placeholder="Enter your Email"
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
  </div>

  <button className="w-1/3 bg-pink-600 text-white text-3xl  py-2.5 rounded-full shadow-md hover:bg-pink-500" style={{ fontFamily: 'Instrument Serif, serif' }}>
    Sign In
  </button>

  <p className="text-center text-sm mt-4" >
    Forgot Password?
  </p>

  <p className="text-center text-sm mt-4">
    New to Hoomans? <span className="text-pink-500 cursor-pointer" onClick={() => navigate("/signup")}>Sign Up</span>
  </p>
</div>
    </div>
  );
};

export default SignIn;

