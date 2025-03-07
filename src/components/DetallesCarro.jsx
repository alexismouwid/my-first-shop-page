import { Component } from "react";

const styles = {
  detallesCarro: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    color: "#fff",
    padding: "5px 10px",
    position: "absolute",
    marginTop: 20,
    boxShadow: "1px 5px 5px rgb(0,0,0,0.6)",
    borderRadius: "15px",
    width: "300px",
    right: 50,
    backdropFilter: "blur(5px)" /* Desenfoque del fondo */,
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },

  ul: {
    margin: 0,
    padding: 0,
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },

  li: {
    border: "1px solid rgba(255, 255, 255, 0.2)",
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaa",
  },

  total: {
    fontWeight: "bold",

    border: "1px solid rgba(255, 255, 255, 0.2)",

    fontSize: "1.3rem",
    marginTop: 10,
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 10px",
    alignItems: "center",
    flexDirection: "column",
  },
};

class DetallesCarro extends Component {
  render() {
    const { carro } = this.props;
    console.log(carro);
    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
          {carro.map((producto) => (
            <li key={producto.name} style={styles.li}>
              <img
                alt={producto.name}
                src={producto.img}
                width="50px"
                height="32px"
              />
              {producto.name}
              <span>{producto.cantidad}</span>
              <span>{producto.price}</span>
            </li>
          ))}
        </ul>
        <span style={styles.total}>
          Total: {carro.reduce((acc, el) => acc + el.price, 0)}
        </span>
      </div>
    );
  }
}

export default DetallesCarro;
