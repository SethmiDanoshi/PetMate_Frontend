import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HomePage() {
  return (
    <Carousel className="w-full h-screen">
      {/* First Slide */}
      <Carousel.Item interval={1000} className="w-full h-screen">
        <img
          src="/FirstSlide.jpg"
          alt="Dog and Cat"
          className="w-full h-full object-cover"
        />
        <Carousel.Caption className="text-white">
          <h3 className="text-[80px] font-regular text-black" style={{ fontFamily: 'Italianno' }}>
            Where Every Breed Finds a New Friend.
          </h3>
        
	<div className="bg-white p-4 rounded-full shadow-lg flex flex-col md:flex-row items-center gap-6 px-5  mb-[40px]">
        <div className="flex items-center">
            <div className="w-20 h-14 bg-white text-white text-6xl flex items-center justify-center rounded-full mr-3">
            🐾
            </div>
        <div>
        <span className="text-black font-bold text-4xl block" style={{ fontFamily: 'Irish Grover'}}>Meow Meow!</span>
        <span className="text-gray-700 text-lg" style={{ fontFamily: 'Irish Grover' }}>Let's Join Meow World</span>
        </div>
        </div>

        <div className="flex gap-4 ml-5 ">
            <button className="bg-pink-600 text-white px-8 py-2 rounded-full shadow-md text-lg font-semibold hover:bg-pink-500">
            Sign Up
            </button>
            <button className="bg-blue-500 text-white px-8 py-2 rounded-full shadow-md text-lg font-semibold hover:bg-blue-400">
            Login
            </button>
        </div>
    </div>
    </Carousel.Caption>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item interval={500} className="w-full h-screen">
        <img
          src="/secondslide.jpg"
          alt="Dog and Cat"
          className="w-full h-full object-cover"
        />
        <Carousel.Caption className="text-black">
          <h3 className="text-3xl md:text-4xl font-serif font-bold">
            Find Your Perfect Companion or a Loving Home!
          </h3>
        </Carousel.Caption>
	<div className="absolute bottom-0 left-0 right-0 w-screen bg-pink-600 text-white py-6 text-center">
    <h2 className="text-xl md:text-2xl font-serif font-bold">
        Buy, and Sell Pets with Ease!
    </h2>
    <button className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
        Explore
    </button>
    </div>
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item className="w-full h-screen">
        <img
          src="/thirdslide.jpg"
          alt="Dog and Cat"
          className="w-full h-full object-cover"
        />
        <Carousel.Caption className="text-black">
        
	{/* In-Clinic Section */}
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg mb-6 ">
        <h2 className="text-2xl md:text-4xl font-semibold italic mb-4">
          Secure Your Spot - Book Vet Appointments Hassle
        </h2>
          <h3 className="text-xl md:text-2xl font-bold">In-Clinic</h3>
          <button className="mt-2 px-4 py-2 bg-white text-blsck font-bold rounded-full hover:bg-gray-200">
              Free for Your Furry Friends!
            </button>
          <div className="mt-4 flex justify-end">
            <img
              src="/clinic.jpg"
              alt="In-Clinic Service"
              className="w-20 h-20 rounded-full border-2 border-white"
            />
          </div>
        </div>

        {/* Home Visits Section */}
        <div className="bg-white bg-opacity-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-4xl font-semibold italic mb-4">
          Schedule Appointments and Services at tour Fingertips!
        </h2>
          <h3 className="text-xl md:text-2xl font-bold">Home-Visits</h3>
          <button className="mt-2 px-4 py-2 bg-white text-black font-bold rounded-full hover:bg-gray-200">
              Plan Your Pet Care with Ease
            </button>
          <div className="mt-6 flex justify-left">
            <img
              src="/homevisit.jpg"
              alt="Home Visit Service"
              className="w-20 h-20 rounded-full border-2 border-white"
            />
          </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default HomePage;