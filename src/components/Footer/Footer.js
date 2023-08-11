import React from "react";
import "./Footer.css";
import { FaGithub, FaCodepen, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="social-icons">
        <a
          href="https://github.com/sumansingle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://codepen.io/gvcgvjh1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCodepen className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/suman-ghoshcs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://www.instagram.com/sumanghosh3744/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
        </a>
      </div>
      <div className="footer-text">
        <p>Handcrafted with by me. suman❤ ❤️ </p>
      </div>
    </div>
  );
}

export default Footer;
