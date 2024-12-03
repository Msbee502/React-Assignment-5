import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header>
      <div className="navContainer">
        <li className="navLink">
          <Link to="/Logo">Seeker</Link>
        </li>
        <nav className="navbar">
          <ul className="list">
            <li className="navLink">
              <Link to="/Images">Images</Link>
            </li>
            <li className="navLink">
              <Link to="/Video">Video</Link>
            </li>
            <li className="navLink">
              <Link to="/Map">Map</Link>
            </li>
            <li className="navLink">
              <Link to="/Products">Products</Link>
            </li>
          </ul>
        </nav>
        <li className="navLink">
          <Link to="/Signin">Sign in</Link>
        </li>
      </div>
    </header>
  );
}

export default Navbar;
