import { Component } from "react";
import './Button.css';
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
    return <button className='button-agregar'  {...this.props} />;
  }
}

export default Button;
