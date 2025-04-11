import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { defaultUserIcon, globeIcon } from "../constants/images"; // Import images

const Navbar = () => {
  const [userIcon, setUserIcon] = useState(localStorage.getItem("userIcon") || defaultUserIcon);

  return (
    <nav className="navbar">
      {/* Left - Logo / Name */}
      <div className="navbar-left">
        <h1>🌱 Tech Kisan</h1>
      </div>

      {/* Right - Language Selector & User Profile */}
      <div className="navbar-right">
        {/* Language Selector */}
        <div className="language-selector">
          <img src={globeIcon} alt="Language" className="icon" />
          <select>
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="mr">मराठी</option>
            <option value="bn">বাংলা</option>
          </select>
        </div>

        {/* User Profile Icon */}
        <Link to="/profile">
          <img src={userIcon} alt="User" className="icon user-icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
