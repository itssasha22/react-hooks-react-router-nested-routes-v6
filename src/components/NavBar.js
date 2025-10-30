import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        className="nav-link"
      >
        Login
      </NavLink>
      <NavLink
        to="/users"
        className="nav-link"
      >
        Users
      </NavLink>
    </nav>
  );
};

export default NavBar;
