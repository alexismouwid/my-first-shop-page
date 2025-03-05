import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
const styles = {
  carro: {
    backgroundColor: "#9b9b9b",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: 20,
  },
};
class Carro extends Component {
  render() {
    return (
      <div>
        <span style={styles.bubble}>
          <BubbleAlert value={10} />
        </span>
        <button style={styles.carro}>
          <img src="/carro.png" alt="carro" width="40px" />
        </button>
      </div>
    );
  }
}

export default Carro;
