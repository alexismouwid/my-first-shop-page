import React, { Component, createRef } from "react";
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
    }));
  };

  toggleRegistro = () => {
    this.setState((prevState) => ({
      mostrarRegistro: !prevState.mostrarRegistro,
      mostrarFormulario: false,
    }));
  };
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    const { mostrarFormulario, mostrarRegistro } = this.state;

    return (
      <nav ref={this.navRef} className="navbar">
        <Logo />
        <h1>PROMOCIONES</h1>
        <h1>HAZ TU PEDIDO</h1>
        <FormularioLogin
          mostrarFormulario={mostrarFormulario}
          toggleFormulario={this.toggleFormulario}
        />
        <FormularioRegistro
          mostrarRegistro={mostrarRegistro}
          toggleRegistro={this.toggleRegistro}
        />
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
