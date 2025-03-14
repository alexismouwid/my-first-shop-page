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
    const { carro, esCarroVisible, mostrarCarro, usuarioAutenticado, cerrarSesion, verificarSesion} = this.props;
    const { mostrarFormulario, mostrarRegistro} =
      this.state;
console.log(usuarioAutenticado);
    return (
      <nav className="navbar">
        <Logo />
        <h1>PROMOCIONES</h1>
        <h1>HAZ TU PEDIDO</h1>

        {!usuarioAutenticado ? (
          <>
            <FormularioLogin
              mostrarFormulario={mostrarFormulario}
              toggleFormulario={this.toggleFormulario}
              verificarSesion={verificarSesion} // Pasamos la funció
            />
            <FormularioRegistro
              mostrarRegistro={mostrarRegistro}
              toggleRegistro={this.toggleRegistro}
            />
          </>
        ) : (
          <button className="cerrar-sesion" onClick={cerrarSesion}>
            Cerrar Sesión
          </button>
        )}

        <Carro
          carro={carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={mostrarCarro}
        />
      </nav>
    );
  }
}

export default Navbar;
