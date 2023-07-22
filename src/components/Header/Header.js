import React, { useState } from 'react';
import '../Header/Header.css';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../../assets/logo-change.png';
import Hamburger from '../../assets/hamburger.png';
import Sidebar from '../Header/Sidebar'; // Import the Sidebar component

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="header">
        <div className="leftsection">
          <div className="logo">
            <img src={Logo} height={80} width={100} className="logo-img" alt="logo" />
          </div>
        </div>
        <div className="hambarger">
          <img
            src={Hamburger}
            height={80}
            width={100}
            className="hambarger-img"
            alt="hamburger"
            onClick={toggleSidebar}
          />
        </div>
        <div className="rightsection">
          <ul>
            <li>
              <Link to="/" className="list-item line">
                About
              </Link>
            </li>
            <li>
              <Link to="/works" className="list-item line">
                Project
              </Link>
            </li>
            <li>
              <Link to="/contact" className="list-item line">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
      {/* Render the Sidebar component with the open state */}
      <Sidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
    </>
  );
}

export default Header;
