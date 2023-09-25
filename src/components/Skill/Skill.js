import React from "react";
import "../Skill/Skill.css";

function TechStack() {
  return (
    <div className="tech-stack-container">
      <h2 className="skills">Skills</h2>
      <h2>Languages:</h2>
      <ul>
        <li className="li-item">
          JavaScript
        </li>
        <li className="li-item">
          Java
        </li>
        <li className="li-item">
         HTML
        </li>
        <li className="li-item">
          CSS
        </li>
        <li className="li-item">
          C
        </li>
        <li className="li-item">
          C++
        </li>
      </ul>
      <h2>Technologies:</h2>
      <ul>
        <li className="li-item">
          ReactJS
        </li>
        <li className="li-item">
          Bootstrap
        </li>
        <li className="li-item">
          Node.js
        </li>

        <li className="li-item">
          Redux
        </li>
        <li className="li-item">
          TailwindCss
        </li>
        <li className="li-item">
          MaterialUI
        </li>
        <li className="li-item">
          MongoDB
        </li>
        {/* Add more items with icons as needed */}
      </ul>
    </div>
  );
}

export default TechStack;
