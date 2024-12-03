import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header>
      <div className="navContainer">
        <li className="navLink">
          <Link to="/">Seeker</Link>
        </li>
        <nav className="navbar">
          <ul className="list">
            <li className="navLink">
              <Link to="/videos">Videos</Link>
            </li>
            <li className="navLink">
              <Link to="/images">Images</Link>
            </li>
            <li className="navLink">
              <Link to="/maps">Map</Link>
            </li>
            <li className="navLink">
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <li className="navLink">
          <Link to="/signIn">SignIn</Link>
        </li>
      </div>
    </header>
  );
}

export default Navbar;
