import { Link } from "react-router-dom"
export default function Navbar(){
  return (
  <div className="navbar container">
    <a className="logo" href="/">M<span>ea</span>l<span>M</span>ingle</a>
    <div className="nav-links">

      <a className="home" href="/">Home</a>
      <a  href="recipes">Recipes</a>
      <a className="home" href="#contact-us">Contact Us</a>
    </div>
  </div>
)
}