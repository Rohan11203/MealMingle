import { Link } from "react-router-dom";
import Recipes from "../pages/Recipes";
export default function Navbar() {
  return (
    <div className="navbar container">
      <a href="/">
        M<span>ea</span>l<span>M</span>ingle
      </a>
      
      <Link className="logo" to=""></Link>
      <div className="nav-links">
        <a className="home" href="/">
          Home
        </a>
        <Link to="recipes">Recipes</Link>
        <a className="home" href="#contact-us">
          Contact Us
        </a>
      </div>
    </div>
  );
}
