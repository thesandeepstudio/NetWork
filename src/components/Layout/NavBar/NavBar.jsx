import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="container navbar">
      <div className="logo">
        <Link to="/">NetWork</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/findJob">Find Jobs</Link></li>
          <li><Link to="/candidates">Candidates</Link></li>
          <li><Link to="/companies">Companies</Link></li>
          <li><Link to="/customerSupport">Customer Support</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
