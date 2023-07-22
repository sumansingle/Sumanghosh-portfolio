import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Create Sidebar.css file for styling

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className='sidebar-menu'>
        <p>
          <Link to="/" className="list-item line" onClick={onClose}>
            About
          </Link>
        </p>
        <p>
          <Link to="/works" className="list-item line" onClick={onClose}>
            Project
          </Link>
        </p>
        <p>
          <Link to="/contact" className="list-item line" onClick={onClose}>
            Contact
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
