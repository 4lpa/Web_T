import React,{useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai' 
import { NavLink } from "react-router-dom";

function Navbar() {
    const [nav, setnav] = useState(false)
    const handleNav = () => {
      setnav(!nav)
    }


  return (
    <div className='bg-[#0093AF] shadow-lg  ' >
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[white] font-semibold relative z-10'>
            <a href='https://www.google.com/' className='text-3xl font-bold text-[black] active:bg-[#00AFD1] rounded-lg focus:outline-none focus:ring focus:ring-[#00BADF] '> Paca<span className='text-[#EFFFFA]'>Web</span> </a>
              <ul className='hidden md:flex '>
                  <li className='p-4 hover:text-[#26FDB9] duration-300'><NavLink to="/Home" className={({isActive}) => isActive ? "border-b-2 border-amber-400 font-bold py-2 px-4 " :""}>Home</NavLink></li>
                  <li className='p-4 hover:text-[#26FDB9] duration-300'><NavLink to="/Company" className={({isActive}) => isActive ? "border-b-2 border-amber-400 font-bold py-2 px-4 " :""}>Company</NavLink></li>
                  <li className='p-4'>Resource</li>
                  <li className='p-4'>About</li>
                  <li className='p-4'>Contact</li>
              </ul>
        <div onClick={handleNav} className='block md:hidden text-[#26DBFF] fixed right-4'>
          {nav ? <AiOutlineClose size={25}/>:<AiOutlineMenu size={25}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[45%] h-full border-r border-r-gray-500 bg-[#1F6371] text-[white] ease-in-out duration-200':'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold bg-clip-text bg-gradient-to-r text-transparent from-[#EFFFFA] to-[#0091AD] m-5 pt-3 mb-4'> PacaWeb</h1>
             <ul className='uppercase p-4 pt-2'>
                  <li className='p-4 border-b border-gray-400'><NavLink to="/Home" className={({isActive}) => isActive ? "text-[#26FDB9] font-bold py-2 px-4 " :""}>Home</NavLink></li>
                  <li className='p-4 border-b border-gray-400'><NavLink to="/Company" className={({isActive}) => isActive ? "text-[#26FDB9] font-bold py-2 px-4 " :""}>Company</NavLink></li>
                  <li className='p-4 border-b border-gray-400'>Resource</li>
                  <li className='p-4 border-b border-gray-400'>About</li>
                  <li className='p-4 border-b border-gray-400'>Contact</li>
              </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar