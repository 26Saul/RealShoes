import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-legal">
        © 2026 RealShoes. Todos los derechos reservados.
        {" "}
        <Link to="/privacy">Política de Privacidad y Cookies</Link> | 
        <Link to="/terms">Condiciones de Venta</Link>
      </div>

      <div className="footer-social">
        <div className="social-item">
          <span>Facebook</span>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook" />
          </a>
        </div>

        <div className="social-item">
          <span>Instagram</span>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>
        </div>

        <div className="social-item">
          <span>Twitter</span>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <img src="/icons/twitter.svg" alt="Twitter" />
          </a>
        </div>

        <div className="social-item">
          <span>LinkedIn</span>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="footer-links">
        <a
          href="https://github.com/26Saul/RealShoes/tree/develop"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.figma.com/design/hXN713gmeAR9qaz9XM3YGR/Website-of-architects---free-website--Community-?node-id=0-1&p=f&t=sKF64ivrLcY9RjxU-0"
          target="_blank"
          rel="noreferrer"
        >
          Figma
        </a>
        <Link to="/">Inicio</Link>
      </div>
    </footer>
  );
}

export default Footer;
