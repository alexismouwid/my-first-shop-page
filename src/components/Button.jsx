import { Component } from "react";

const styles = {
  button: {
    backgroundColor: "#0A7E8C",
    color: "#fff",
    border: "none",
    padding: "15px 20px",
    borderRadius: "5px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
  },
};
class Button extends Component {
  render() {
    return <button style={styles.button} {...this.props} />;
  }
}

export default Button;
