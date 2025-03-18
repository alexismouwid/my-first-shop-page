import React, { Component } from "react";
import Logo from "./Logo";
import "./Navbar.css";
import Carro from "./Carro";
import FormularioLogin from "./FormularioLogin";
import FormularioRegistro from "./FormularioRegistro";

class Navbar extends Component {

  state = {
    mostrarFormulario: false,
    mostrarRegistro: false,
  };

  toggleFormulario = () => {
    this.setState((prevState) => ({
      mostrarFormulario: !prevState.mostrarFormulario,
      mostrarRegistro: false,
    }));
  };

  toggleRegistro = () => {
    this.setState((prevState) => ({
      mostrarRegistro: !prevState.mostrarRegistro,
      mostrarFormulario: false,
    }));
  };

  render() {
    const {
      carroRef,
      carro,
      esCarroVisible,
      mostrarCarro,
      usuarioAutenticado,
      cerrarSesion,
      verificarSesion,
    } = this.props;
    const { mostrarFormulario, mostrarRegistro } = this.state;

    return (
      <nav className="navbar">
        <div className="navbar-container">
         

          <ul className="nav-links">
            <li > 
            <Logo />
          </li>
            <li><h1>HAZ TU PEDIDO</h1></li>

            {usuarioAutenticado ? (
              <>
                <li>
                  <button className="cerrar-sesion" onClick={cerrarSesion}>
                    Cerrar Sesión
                  </button>
                </li>
                <li className="carro">
                  <Carro  carro={carro} esCarroVisible={esCarroVisible} mostrarCarro={mostrarCarro} />
                </li>
              </>
            ) : (
              <>
                <li className="login"> 
                  <FormularioLogin
                    mostrarFormulario={mostrarFormulario}
                    toggleFormulario={this.toggleFormulario}
                    verificarSesion={verificarSesion}
                  />
                </li>
                <li className="register">
                  <FormularioRegistro
                    mostrarRegistro={mostrarRegistro}
                    toggleRegistro={this.toggleRegistro}
                  />
                </li>
                <li className="carro">
                  <Carro carro={carro} esCarroVisible={esCarroVisible} mostrarCarro={mostrarCarro} />
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

