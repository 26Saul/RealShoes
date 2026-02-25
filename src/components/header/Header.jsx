import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/RealShoes.jpg" alt="RealShoes Logo" />
        </Link>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>Sobre Nosotros</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link>
        <Link to="/community" onClick={() => setMenuOpen(false)}>Nuestra Comunidad</Link>

      </nav>
    </header>
  );
}

export default Header;
