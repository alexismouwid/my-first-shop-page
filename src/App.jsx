import { Component, createRef } from "react";
import Productos from "./components/Productos";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import VerProductos from "./components/VerProductos";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.productosRef = createRef(); // 🔹 Creamos una referencia a la sección de productos
  }

  state = {
    productos: [
      { name: "Tomate", price: 900, img: "/productos/tomate.jpg" },
      { name: "Arbejas", price: 800, img: "/productos/arbejas.jpg" },
      { name: "Lechuga", price: 1000, img: "/productos/lechuga.jpg" },
      { name: "Zanahoria", price: 1500, img: "/productos/zanahoria.png" },
      { name: "Cebolla", price: 2100, img: "/productos/cebolla.png" },
      { name: "Brócoli", price: 1350, img: "/productos/brocoli.png" },
      { name: "Espinaca", price: 1700, img: "/productos/espinaca.png" },
      { name: "Pepino", price: 1900, img: "/productos/pepino.png" },
      { name: "Calabacín", price: 2250, img: "/productos/calabacin.png" },
      { name: "Ajo", price: 2500, img: "/productos/ajo.png" },
      { name: "Pimiento", price: 1600, img: "/productos/pimiento.png" },
      { name: "Repollo", price: 1750, img: "/productos/repollo.png" },
    ],

    carro: [],
    esCarroVisible: false,
    usuario: JSON.parse(localStorage.getItem("usuario")) || null,
    usuarioAutenticado: !!localStorage.getItem("token"),
  };



  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1,
              price: (x.cantidad + 1) * x.price,
            }
          : x,
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({ ...producto, cantidad: 1 }),
    });
  };

  mostrarCarro = () => {
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };

  // 🔹 Función para hacer scroll a la sección de productos
  scrollToProductos = () => {
    if (this.productosRef.current) {
      this.productosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    this.setState({ usuarioAutenticado: false, usuario: null }, () => {
this.verificarSesion();      
    });
  };

 verificarSesion = () => {
    const token = localStorage.getItem("token");
   console.log("Token en localStorage:", token);
    this.setState({ usuarioAutenticado: !!token });
  };
  componentDidMount() {
    this.verificarSesion();
  }

  render() {
    const { carro, esCarroVisible, usuario , usuarioAutenticado} = this.state;
    const nombre = JSON.parse(localStorage.getItem("usuario")) || {
      nombre: "Invitado",
    };
    console.log("Usuario en localStorage:", nombre);

    return (
      <div className="App">
        <div className="content-1">
          <Navbar
            carro={this.state.carro}
            esCarroVisible={esCarroVisible}
            mostrarCarro={this.mostrarCarro}
            usuarioAutenticado={usuarioAutenticado}
            cerrarSesion={this.cerrarSesion}
            verificarSesion={this.verificarSesion}
          />
          <h1 className="titulo">
            {usuario ? `Bienvenido, ${usuario.nombre}` : "Productos del campo"}
          </h1>
          <VerProductos scrollToProductos={this.scrollToProductos} />
        </div>

        {/* 🔹 Referencia a la sección de productos */}
        <div ref={this.productosRef}>
          <Layout>
            <Productos
              agregarAlCarro={this.agregarAlCarro}
              productos={this.state.productos}
            />
          </Layout>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
