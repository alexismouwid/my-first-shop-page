import { Component } from "react";
const styles = {
  logo: {
    textAlign: "center",
    hight: "100px",
    width: "100px",
    cursor: "pointer",
    position: "relative",
    top: 10,
    rigth: 20,
  },
};

class Logo extends Component {
  render() {
    return (
      <div style={styles.logo}>
        <img src="/logo.png" alt="logo" width="100px" />
      </div>
    );
  }
}
export default Logo;
