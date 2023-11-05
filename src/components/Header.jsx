import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { useSearch } from '../utils/contextApi'


const Header = () => {
  const { updateSearchQuery } = useSearch(); 
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSearch = (category) => () => {
    updateSearchQuery(category);
    setSidebarOpen(false);
  }

  const togglesidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const sidebarStyle = {
    transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
    transition: "transform 0.5s ease-in-out",
  };

  return (
    <div className="w-full p-2 bg-white text-black shadow-xl flex justify-between items-center relative z-20">
      <div className="flex gap-2 items-center ml-2">
        <RxHamburgerMenu
          className="text-2xl cursor-pointer"
          onClick={togglesidebar}
        />
        <span>Menu</span>
      </div>
      <div className="flex items-center flex-grow justify-center">
        <img
          className="h-14 mr-2 md:mr-16" 
          src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
          alt=""
        />
      </div>
      <div
        className="fixed top-0 left-0 h-full w-3/4 md:w-1/6 bg-gray-800 text-gray-100 p-4" // Adjust width for smaller screens
        style={sidebarStyle}
      >
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-gray-500">Categories</h4>
          <IoCloseSharp
            className="text-2xl cursor-pointer"
            onClick={togglesidebar}
          />
        </div>
        <ul>
  <li className="my-2 hover:bg-gray-600 hover:text-white cursor-pointer" onClick={toggleSearch('Entertainment')}>Entertainment</li>
  <li className="my-2 hover:bg-gray-600 hover:text-white cursor-pointer" onClick={toggleSearch('Sports')}>Sports</li>
  <li className="my-2 hover-bg-gray-600 hover:text-white cursor-pointer" onClick={toggleSearch('Global')}>Global</li>
  <li className="my-2 hover:bg-gray-600 hover:text-white cursor-pointer" onClick={toggleSearch('Technology')}>Technology</li>
  <li className="my-2 hover:bg-gray-600 hover-text-white cursor-pointer" onClick={toggleSearch('Health')}>Health</li>
      </ul>  
      </div>
    </div>
  );
};

export default Header;

