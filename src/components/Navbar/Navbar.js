import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  return (
    <nav>
      <div className="menu-items">
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
      <div className="icons">
        <a
          target="_blank"
          href="https://github.com/andresnogales/"
          title="Link to Github Profile"
        >
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/andres-nogales/"
          title="Link to Linkedin Profile"
        >
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
        <div className="mobile-menu-icon">
          <button className="toggle-button" onClick={toggle}>
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
