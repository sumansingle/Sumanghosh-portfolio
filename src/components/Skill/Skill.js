import React from "react";
import "../Skill/Skill.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faJava,
  faHtml5,
  faCss3,
  faC,
  faCpp,
  faReact,
  faBootstrap,
  faMaterialUI,
  faTailwindCss,
  faNodeJs,
  faRedux,
  faDatabase
  // Add more icons here as needed
} from "@fortawesome/free-brands-svg-icons";

function TechStack() {
  return (
    <div className="tech-stack-container">
      <h2 className="skills">Skills</h2>
      <h2>Languages:</h2>
      <ul>
        <li className="li-item">
          <FontAwesomeIcon icon={faJs} /> JavaScript
        </li>
        <li className="li-item">
          <FontAwesomeIcon icon={faJava} /> Java
        </li>
        <li className="li-item">
          <FontAwesomeIcon icon={faHtml5} /> HTML
        </li>
        <li className="li-item">
          <FontAwesomeIcon icon={faCss3} /> CSS
        </li>
        <li className="li-item">
          <FontAwesomeIcon icon={faC} /> C
        </li>
        <li className="li-item">
          <FontAwesomeIcon icon={faCpp} /> C++
        </li>
      </ul>
      <h2>Technologies:</h2>
      <ul>
        <li className="li-item">
          <FontAwesomeIcon icon={faReact} /> ReactJS
        </li>
        <li className="li-item">
          <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
        </li>
        <li className="li-item">
          <FontAwesomeIcon icon={faNodeJs} /> Node.js
        </li>

        <li className="li-item">
          <FontAwesomeIcon icon={faRedux} /> Redux
        </li>
        <li className="li-item">
          <FontAwesomeIcon icon={faTailwindCss} /> TailwindCss
        </li>
        <li className="li-item">
          <FontAwesomeIcon icon={faMaterialUI} /> MaterialUI
        </li>
        <li className="li-item">
          <FontAwesomeIcon icon={faDatabase} /> MongoDB
        </li>
        {/* Add more items with icons as needed */}
      </ul>
    </div>
  );
}

export default TechStack;
