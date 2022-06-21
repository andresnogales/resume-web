import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About me
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/skills">
            Skills
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact Me
          </Link>
        </li>
      </ul>
      <div class="nav-icons">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/andres-nogales/"
          title="Link to Linkedin Profile"
        >
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          target="_blank"
          href="https://github.com/andresnogales/"
          title="Link to Github Profile"
        >
          <i class="fab fa-github fa-2x"></i>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
