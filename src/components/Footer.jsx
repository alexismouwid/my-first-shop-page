import React, { Component } from "react";
import "./Footer.css"; // Asegúrate de crear y enlazar el archivo de estilos

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <h2>Contáctanos</h2>
          <div className="icons">
            <a
              href="https://wa.me/123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/wp.png" alt="WhatsApp" className="icon" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/facebook.png" alt="Facebook" className="icon" />
            </a>
            <a href="tel:+123456789">
              <img src="/telefono.png" alt="Telefono" className="icon" />
            </a>
          </div>
          <p>&copy; 2024 Todos los derechos reservados</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
