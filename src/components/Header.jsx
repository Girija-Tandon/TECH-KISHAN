import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { defaultUserIcon, globeIcon } from "../constants/images"; // ✅ Import here

const Header = () => {
  const [userIcon, setUserIcon] = useState(localStorage.getItem("userIcon") || defaultUserIcon);

  return (
    <header className="header">
      <h1>🌱 Tech Kisan</h1>

      <div className="header-icons">
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
    </header>
  );
};

export default Header;
