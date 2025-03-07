import { Component } from "react";
import "./VerProductos.css";

class VerProductos extends Component {
  render() {
    return (
      <button onClick={this.props.scrollToProductos} className="btn-productos">
        Ver productos
      </button>
    );
  }
}

export default VerProductos;
