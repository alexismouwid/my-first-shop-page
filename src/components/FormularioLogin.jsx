import React, { Component } from "react";
import "./FormularioLogin.css"; // Agrega estilos si es necesario

class FormularioLogin extends Component {
  render() {
    const { mostrarFormulario, toggleFormulario } = this.props;

    return (
      <div className="formulario-container">
        <h1 className="login-title" onClick={toggleFormulario}>
          INICIAR SESIÓN
        </h1>

        {mostrarFormulario && (
          <div className="formulario-login">
            <input type="text" placeholder="Usuario" className="input" />
            <input type="password" placeholder="Contraseña" className="input" />
            <button className="btn">Entrar</button>
          </div>
        )}
      </div>
    );
  }
}

export default FormularioLogin;
