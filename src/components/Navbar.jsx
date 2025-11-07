import React, { useState } from 'react'
import { BiMenu } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <>
    <nav className='flex justify-between items-center bg-gray-800 text-white p-4 fixed top-0 w-full m-auto'>
            <h1 className='text-md font-bold text-blue-500 sm:text-4xl'>Harish</h1>
            <BiMenu className='block sm:hidden text-2xl cursor-pointer' onClick={()=>setHamburger(!hamburger)}/>
            <ul className={`${hamburger ? 'flex' : 'hidden'} sm:flex sm:flex-row flex-col
                gap-10 text-center text-md p-5 absolute sm:static top-12 right-0
                w-[450px] sm:w-auto bg-gray-800 sm:bg-transparent
                transition-all duration-300`}>
              <Link to={'/'}><li className='hover:scale-110'>Home</li></Link>
              <Link to={'/skills'}><li className='hover:scale-110'>Skills</li></Link>
              <Link to={'/projects'}><li className='hover:scale-110'>Projects</li></Link>
              <Link to={'/contact'}><li className='hover:scale-110'>Contact</li></Link>
            </ul>
          </nav>
    </>
    
  )
}

export default Navbar