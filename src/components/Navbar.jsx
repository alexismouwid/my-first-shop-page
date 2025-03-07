import React, { Component, createRef } from "react";
import Logo from "./Logo";
import "./Navbar.css";
import Carro from "./Carro";

class Navbar extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;

    return (
      <nav ref={this.navRef} className="navbar">
        <Logo />
        <h1>TIENDA</h1>
        <h1>PROMOCIONES</h1>
        <h1>HAZ TU PEDIDO</h1>
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
