import { Component, createRef } from "react";
import Producto from "./Producto.jsx";
import "./Productos.css";

const styles = {};

class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props;
    return (
      <div ref={this.productosRef} className="productos">
        {productos.map((producto) => (
          <Producto
            agregarAlCarro={agregarAlCarro}
            key={producto.name}
            producto={producto}
          />
        ))}
       
      </div>
    );
  }
}

export default Productos;
