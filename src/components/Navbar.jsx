import React from 'react'
import logo from '../assets/logo6.jpg'
import { TbLogout } from "react-icons/tb";
import { Link,useNavigate } from 'react-router-dom';


function Navbar() {
const navigate=useNavigate();
    const logout =()=>{
        localStorage.removeItem('username');
        localStorage.removeItem('favourite');
        localStorage.removeItem('readBook');
        navigate('/login'); 
    }
  return (
    <div className="navbar  bg-[#f2dfdf]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
<li><Link to={'/book'} className='font-bold text-[#946c5b]'>Books</Link></li>
            <li><Link to={'/fav'} className='font-bold text-[#946c5b]'>FavouriteBook</Link></li>
            <li><Link to={'/read'} className='font-bold text-[#946c5b]'>ReadBook</Link></li>
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
  <Link to={'/home'}>  <img src={logo} className='w-16 h-16 rounded-full'/></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to={'/book'} className='font-bold text-[#946c5b]'>Books</Link></li>
            <li><Link to={'/fav'} className='font-bold text-[#946c5b]'>FavouriteBook</Link></li>
            <li><Link to={'/read'} className='font-bold text-[#946c5b]'>ReadBook</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
   <TbLogout onClick={logout}  className='w-6 h-6 text-[#946c5b] hover:bg-[lightgray] '/>
  </div>
</div>
  )
}

export default Navbar