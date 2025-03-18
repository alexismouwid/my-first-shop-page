import { Component, createRef } from "react";
import Fruta from "./Fruta.jsx";
import "./Frutas.css";


class Frutas extends Component {
  render() {
    const { frutas, agregarAlCarro} = this.props;
    return (
      <div ref={this.frutasRef} className="frutas">
        {frutas.map((fruta) => (
          <Fruta
            agregarAlCarro={agregarAlCarro}
            key={fruta.name}
            fruta={fruta}
          />
        ))}
      </div>
    );
  }
}

export default Frutas;
