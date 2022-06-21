import React from "react";
import "./style.css";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ isopen, toggle }) => {
  let opacityClasses = ["sidebar-container"];
  if (isopen) {
    opacityClasses.push("opacity-on");
  } else {
    opacityClasses.push("opacity-off");
  }

  return (
    <div
      className={opacityClasses.join(" ")}
      isopen={isopen.toString()}
      onClick={toggle}
    >
      <div className="icon">
        <FaTimes className="close-icon" onClick={toggle} />
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <ul>
            <li>
              <Link className="nav-link" to="/resume-web/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/resume-web/about">
                About me
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/resume-web/skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/resume-web/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/resume-web/contact">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
