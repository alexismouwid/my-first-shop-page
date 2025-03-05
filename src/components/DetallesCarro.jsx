import { Component } from "react";

const styles = {
  detallesCarro: {
    backgroundColor: "#fff",
    border: "solid 1px #000",
    padding: "5px 10px",
    position: "absolute",
    marginTop: 20,
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
    borderRadius: "5px",
    width: "300px",
    right: 50,
  },

  ul: {
    margin: 0,
    padding: 0,
  },

  li: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 20px",
    borderBottom: "solid 1px #aaa",
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
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DetallesCarro;
