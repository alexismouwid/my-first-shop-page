import { Component } from "react";
import Button from "./Button";
const styles = {
  producto: {
    backgroundColor: "#fff",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
    width: "300px",
  },
  img: {
    width: "100%",
    height: "200px",
  },
};
class Producto extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props;
    return (
      <div style={styles.producto}>
        <img style={styles.img} src={producto.img} alt={producto.name} />
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
        <Button onClick={() => agregarAlCarro(producto)}>
          Agregar al carro
        </Button>
      </div>
    );
  }
}

export default Producto;
