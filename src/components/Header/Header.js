import React, { useState } from "react";
import "../Header/Header.css";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/logo-change.png";
import Hamburger from "../../assets/hamburger.png";
import Sidebar from "../Header/Sidebar"; // Import the Sidebar component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
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
            <img
              src={Logo}
              height={80}
              width={100}
              className="logo-img"
              alt="logo"
            />
          </div>
          <div className="hambarger">
            <img
              src={Hamburger}
              height={40}
              width={40}
              className="hambarger-img"
              alt="hamburger"
              onClick={toggleSidebar}
            />
          </div>
        </div>
        <div className="rightsection">
          <ul>
            <li>
              <Link to="/" className="list-item line">
              <FontAwesomeIcon icon={faHouse} />
              </Link>
            </li>
            <li>
              <Link to="/works" className="list-item line">
              <FontAwesomeIcon icon={faListCheck} />
              </Link>
            </li>
            <li>
              <Link to="/contact" className="list-item line">
              <FontAwesomeIcon icon={faAddressCard} />
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
