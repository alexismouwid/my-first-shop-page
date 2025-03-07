import { Component, createRef } from "react";
import Producto from "./Producto.jsx";
import ScrollReveal from "scrollreveal";

const styles = {
  productos: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
    marginTop: "30px",
    marginBottom: "30px",
    width: "100%",
  },
};

class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props;
    return (
      <div ref={this.productosRef} style={styles.productos}>
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
