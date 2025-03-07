import { Component } from "react";

const styles = {
  layout: {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    alignItems: "center",
    display: "flex",
    color: "#OA283E",
    flexDirection: "column",
  },
  container: {
    width: "1200px",
  },
};
class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.container}>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
