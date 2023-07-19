import React from 'react'
import '../Header/Header.css';
import { Outlet, Link } from "react-router-dom";
import Logo from '../../assets/logo-change.png'
function Header() {
  return (
    <>
    <div className='header'>
    <div className='leftsection'>
      <div className='logo'>
        <img src={Logo} height={80} width={100} className='logo-img' alt='logo'/>
        </div>
    </div>
    <div className='rightsection'>
     <ul>
        <li>
        <Link to="/" className='list-item'>About</Link>
        </li>
        <li>
        <Link to="/works" className='list-item'>Project</Link>
        </li>
        <li>
        <Link to="/contact" className='list-item'>Contact</Link>
        </li>
     </ul>
    </div>
    <Outlet></Outlet>
    </div>
    </>
  )
}

export default Header