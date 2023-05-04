import React from 'react'
import '../Header/Header.css';
import { Outlet, Link } from "react-router-dom";
function Header() {
  return (
    <>
    <div className='header'>
    <div className='leftsection'>
      <p className='heading'>Suman Ghosh</p>
    </div>
    <div className='rightsection'>
     <ul>
        <li>
        <Link to="/" className='list-item'>Home</Link>
        </li>
        <li>
        <Link to="/about" className='list-item'>About me</Link>
        </li>
        <li>
        <Link to="/works" className='list-item'>Works</Link>
        </li>
     </ul>
    </div>
    <Outlet></Outlet>
    </div>
    </>
  )
}

export default Header