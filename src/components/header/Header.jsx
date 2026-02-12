import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <Link to="/">
          <img src="/RealShoes.jpg" alt="RealShoes Logo" />
        </Link>
      </div>

      <nav className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
