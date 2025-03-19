import React, { Component } from "react";
import axios from "axios";
import "./FormularioRegistro.css";

class FormularioRegistro extends Component {
  state = {
    nombre: "",
    email: "",
    password: "",
    error: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, email, password } = this.state;

    try {
      const response = await axios.post("http://localhost:3000/register", {
        nombre,
        email,
        password,
      });

      // Guardar token en localStorage
      localStorage.setItem("token", response.data);

      // Mostrar mensaje y cerrar el formulario
      alert(`Registro exitoso. Bienvenido, ${response.data.nombre}!`);
      this.props.toggleRegistro(); // Usa toggleRegistro en lugar de toggleFormulario
    } catch (error) {
      this.setState({ error: "Error en el registro. Intenta de nuevo." });
    }
  };

  render() {
    const { mostrarRegistro, toggleRegistro } = this.props; // Usa mostrarRegistro en lugar de mostrarFormulario
    const { email, password, error } = this.state;

    return (
      <div className="formulario-container">
        <h1 className="register-title" onClick={toggleRegistro}>
          REGISTRARSE
        </h1>

        {mostrarRegistro && ( // Usa mostrarRegistro en lugar de mostrarFormulario
          <form className="formulario-register" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="input"
              value={this.state.nombre}
              onChange={this.handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              className="input"
              value={email}
              onChange={this.handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="input"
              value={password}
              onChange={this.handleChange}
              required
            />
            <div className="botones-container">
              <button type="submit" className="registrar">
              Registrarse
            </button>

              <button type="button" className="cerrar" onClick={toggleRegistro}>
                Salir
              </button>


            </div> 
                        {error && <p className="error-message">{error}</p>}
          </form>
        )}
      </div>
    );
  }
}

export default FormularioRegistro;
