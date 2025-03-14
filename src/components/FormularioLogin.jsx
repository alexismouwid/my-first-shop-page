import React, { Component } from "react";
import axios from "axios";
import "./FormularioLogin.css";

class FormularioLogin extends Component {
  state = {
    email: "",
    password: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { verificarSesion, toggleFormulario, usuarioAutenticado } =
      this.props; // Recibe desde Navbar

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      console.log("Respuesta de la API:", response.data);
      console.log("Respuesta completa de la API", response);

      const { token, nombre } = response.data;

      if (!token || !nombre) {
        console.error("El backen no envió la respuesta esperada");
        return;
      }

      localStorage.setItem("token", token); // Guarda solo el tokenX
      localStorage.setItem("usuario", JSON.stringify({ nombre })); // Guarda el nombre
      this.setState({ message: `Bienvenido, ${nombre}` });

      verificarSesion(); // Actualiza el estado en NavbarW
      toggleFormulario(); // Cierra el formulario de login
      window.location.reload();
    } catch (error) {
      console.error("Error en la autenticación:", error);

      this.setState({ message: "Usuario y/o contraseña incorrectos" });
    }
  };

  render() {
    const { mostrarFormulario, toggleFormulario } = this.props;

    return (
      <div className="formulario-container">
        <h1 className="login-title" onClick={toggleFormulario}>
          INICIAR SESIÓN
        </h1>

        {mostrarFormulario && (
          <form className="formulario-login" onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Correo"
              className="input"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="input"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <button type="submit" className="btn">
              Entrar
            </button>
            <p>{this.state.message}</p>
          </form>
        )}
      </div>
    );
  }
}

export default FormularioLogin;
