import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

const links=<>
 <li><NavLink to='/' className={({isActive})=> isActive?  'border-solid border-2 border-green-500 text-green-500 bg-white' :'text-black'}>Home</NavLink></li>
 <li><NavLink to='/ListedBooks' className={({isActive})=> isActive?  'border-solid border-2 border-green-500 text-green-500 bg-white' :'text-black'}>Listed Books</NavLink></li>
 <li><NavLink to='/PageToRead' className={({isActive})=> isActive?  ' border-solid border-2 border-green-500 text-green-500 bg-white' :'text-black'}>Page to Read</NavLink></li>
 <li><NavLink to='/About' className={({isActive})=> isActive?  ' border-solid border-2 border-green-500 text-green-500 bg-white' :'text-black'}>About</NavLink></li>
 <li><NavLink to='/Contact' className={({isActive})=> isActive?  ' border-solid border-2 border-green-500 text-green-500 bg-white' :'text-black'}>Contact</NavLink></li>

</>


    return (
        <div className="navbar bg-base-100 mt-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52">
        {links}
        </ul>
    </div>
    <a className="btn btn-ghost lg:text-3xl font-extrabold lg:ml-10">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2 text-xl">
    {links}
    </ul>
  </div>
  <div className="navbar-end gap-2 lg:mr-10">
    <a className="btn bg-[#23BE0A] text-white">Sign In</a>
    <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
  </div>
</div>
    );
};

export default Navbar;