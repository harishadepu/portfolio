import React, { useState } from 'react';
import { BiMenu } from "react-icons/bi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const MenuIcon = hamburger ? ImCross : BiMenu;

  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4 fixed top-0 w-full z-50">
      <h1 className="text-md font-bold text-blue-500 sm:text-4xl">Harish</h1>
      
      <MenuIcon 
        className="block sm:hidden text-2xl cursor-pointer" 
        onClick={() => setHamburger(!hamburger)} 
        aria-label="Toggle navigation menu" 
        role="button" 
      />

      <ul
        className={`${hamburger ? 'flex' : 'hidden'} sm:flex sm:flex-row flex-col
          gap-10 text-center text-md p-5 absolute sm:static top-12 right-0 left-0
          bg-gray-800 sm:bg-transparent transition-all duration-300 ease-in-out`}
      >
        <li className="hover:scale-110" onClick={()=>setHamburger(false)}><a href="#home">Home</a></li>
        <li className="hover:scale-110" onClick={()=>setHamburger(false)}><a href="#skills">Skills</a></li>
        <li className="hover:scale-110" onClick={()=>setHamburger(false)}><a href="#projects">Projects</a></li>
        <li className="hover:scale-110" onClick={()=>setHamburger(false)}><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;