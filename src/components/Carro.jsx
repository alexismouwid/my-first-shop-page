import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";
import "./Carro.css"; // Archivo CSS para los estilos del menú lateral

const styles = {
  carro: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: "8px 30px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
  },
  bubble: {
    position: "relative",
    left: 40,
    top: 1,
    bottom: 20,
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "0px",
    cursor: "pointer",
  },
};

class Carro extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro, vaciarCarro, eliminarDelCarro } = this.props;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);

    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button onClick={mostrarCarro} style={styles.carro}>
          <img src="/carro.png" alt="carro" width="50px" />
        </button>
        {/* Menú lateral */}
        <div className={`carro-lateral ${esCarroVisible ? "active" : ""}`}>
          <DetallesCarro
            carro={carro}
            esCarroVisible={esCarroVisible}
            mostrarCarro={mostrarCarro}
            vaciarCarro={vaciarCarro}
            eliminarDelCarro={eliminarDelCarro}
          />
        </div>
        {/* Overlay para cerrar el menú */}
        {esCarroVisible && (
          <div className="overlay-2" onClick={mostrarCarro}></div>
        )}
      </div>
    );
  }
}

export default Carro;
