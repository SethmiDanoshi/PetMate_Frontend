export default function Contact() {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center h-screen w-screen bg-gray-100 p-6">
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center h-full">
          <img
            src="Contact.jpg" 
            alt="Dog with Glasses"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
  
        {/* Right Side - Contact Info */}
        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg h-full flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-purple-700 text-center mb-6">Contact Us</h2>
          
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-center space-x-4 bg-purple-300 p-4 rounded-lg">
              <span className="text-2xl">📍</span>
              <p className="text-lg text-gray-700">367/18, PetMate, Katubedda, Moratuwa, Sri Lanka</p>
            </div>
            
            {/* Phone */}
            <div className="flex items-center space-x-4 bg-purple-300 p-4 rounded-lg">
              <span className="text-2xl">📞</span>
              <p className="text-lg text-gray-700">+94 76 345 6798</p>
            </div>
            
            {/* Email */}
            <div className="flex items-center space-x-4 bg-purple-300 p-4 rounded-lg">
              <span className="text-2xl">📧</span>
              <p className="text-lg text-gray-700">petmate@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
