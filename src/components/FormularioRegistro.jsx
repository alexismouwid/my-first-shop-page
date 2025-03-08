import React, { Component } from "react";
import "./FormularioRegistro.css"; // Agrega estilos si es necesario

class FormularioRegistro extends Component {
  render() {
    const { mostrarRegistro, toggleRegistro } = this.props;

    return (
      <div className="formulario-container">
        <h1 className="register-title" onClick={toggleRegistro}>
          REGISTRO
        </h1>

        {mostrarRegistro && (
          <div className="formulario-register">
            <input type="text" placeholder="Nombre" className="input" />
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="input"
            />
            <input type="password" placeholder="Contraseña" className="input" />
            <button className="btn">Registrarse</button>
          </div>
        )}
      </div>
    );
  }
}

export default FormularioRegistro;
