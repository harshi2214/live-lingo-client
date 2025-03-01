import React from "react";
import { Link } from "react-router-dom";
//import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">LiveLingo</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/chat">Chat</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/Register">Register</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;