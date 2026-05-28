import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <header>
      <h1>Power Gym</h1>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/join">Join</Link></li>
           <li><Link to="/course">Online Course</Link></li>
          <li><Link to="/calculator">Gym Calculator</Link></li>
          <li><Link to="/equipment">Equipment</Link></li>
          <li><Link to="/plans">Plans</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
