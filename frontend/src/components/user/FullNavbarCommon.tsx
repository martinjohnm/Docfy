import { useState } from "react";
import { Navbar } from "../../components/user/NavBar";

export type NavbarTypes  = "" | "doctors" | "user-profile" | "bookings"

export const FullNavBarCommon = ({page} : {page : NavbarTypes}) => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className="">
        
      {/* Hamburger Menu */}
      <div className="bg-[#061e34] rounded-xl w-full">
          <div className="text-white hidden lg:block">
              <Navbar page={page}/>
          </div>
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
        className={`fixed inset-y-0 left-0 transform z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform bg-gray-800 text-white w-64 p-4`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-0 right-0 hover:text-red-700 p-2"
        >
          <svg
            className="w-6 h-6"
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
          <div className="space-y-4 p-4">
                  <img className="h-10" src="https://demo.casethemes.net/medicross/wp-content/uploads/2024/07/logo.png" alt="" />
          </div>
          <ul className="space-y-4 p-4 text-lg">
            <li><a href="/" className={`block hover:text-gray-300 ${page == "" ? "text-green-300" : "text-white"}`}>Home</a></li>
            <li><a href="/doctors" className={`block hover:text-gray-300 ${page == "doctors" ? "text-green-300" : "text-white"}`}>Doctors</a></li>
            <li><a href="/bookings" className={`block hover:text-gray-300 ${page == "bookings" ? "text-green-300" : "text-white"}`}>Bookings</a></li>
            <li><a href="/profile" className={`block hover:text-gray-300 ${page == "user-profile" ? "text-green-300" : "text-white"}`}>Profile</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

