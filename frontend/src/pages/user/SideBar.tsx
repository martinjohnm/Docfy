import React, { useState } from "react";
import { Navbar } from "../../components/user/NavBar";

export const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className="relative">
        
      
      <div className="bg-[#061e34] rounded-3xl w-full">
          {/* Normal navbar */}
          <div className="text-white hidden lg:block">
              <Navbar/>
          </div>
          {/* navbar with collapsable Hamburger Menu */}
          <div className="w-full px-4 py-4 gap-2 justify-between flex items-center lg:hidden">
              <div className="">
                  <img className="h-14" src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/07/logo.png" alt="" />
              </div>
              <div className="">
                <button
                  onClick={toggleSidebar}
                  className="p-2 outline-none hover:bg-slate-500 bg-white rounded-lg focus:ring-gray-500"
                >
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>  
              </div>
          </div>
          
      </div>
      

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform bg-gray-800 text-white w-64 p-4`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav>
          <ul className="space-y-4">
            <li><a href="/" className="block text-white hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="block text-white hover:text-gray-300">About</a></li>
            <li><a href="/services" className="block text-white hover:text-gray-300">Services</a></li>
            <li><a href="/contact" className="block text-white hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

