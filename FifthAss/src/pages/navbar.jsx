import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
  
      <header>
      <div className="navContainer">   
          <nav className="navbar">
              <ul className="list">
                  <li className="logo"><Link to="/">Home</Link></li>                  
                  <li className="navLink"><Link to="/Video">Video</Link></li>
                  <li className="navLink"><Link to="/Images">Images</Link></li>
                  <li className="navLink"><Link to="/News">News</Link></li>
                  <li className="navLink"><Link to="/Products">Products</Link></li>
                  <li className="navLink"><Link to="/Maps">Maps</Link></li>
                  <li className="signIn"><Link to="/SignIn">Sign in</Link></li>
                 
              </ul>
       </nav>
  </div>
  </header>
  );
}

export default Navbar;
