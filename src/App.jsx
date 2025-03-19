import { Component, createRef } from "react";
import Productos from "./components/Productos";
import Frutas from './components/Frutas'
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
    this.carroRef = createRef();
    this.vegetalesRef = createRef();
    this.frutasRef = createRef();
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
   
frutas: [
      { name: "Fresa", price: 900, img: "/frutas/fresa.jpg" },
      { name: "Naranja", price: 800, img: "/frutas/naranja.jpg" },
      { name: "Uvas", price: 1000, img: "/frutas/uvas.jpg" },
      { name: "Manzana", price: 1500, img: "/frutas/manzana.jpg" },
      { name: "Durazno", price: 2100, img: "/frutas/durazno.jpg" },
      { name: "Papaya", price: 1350, img: "/frutas/papaya.jpg" },
      { name: "Coco", price: 1700, img: "/frutas/coco.jpg" },
      { name: "Pera", price: 1900, img: "/frutas/pera.jpg" },
      { name: "Limón", price: 2250, img: "/frutas/limon.jpg" },
      { name: "Guayaba", price: 2500, img: "/frutas/guayaba.jpg" },
      { name: "Maracuya", price: 1600, img: "/frutas/maracuya.jpg" },
      { name: "Sandia", price: 1750, img: "/frutas/sandia.jpg" },
    ],
    carro: [],
    esCarroVisible: false,
    usuario: JSON.parse(localStorage.getItem("usuario")) || null,
    usuarioAutenticado: !!localStorage.getItem("token"),
    mostrarVegetales: false,
    mostrarFrutas: false,
  };

    toggleVegetales = () => {
  this.setState((prevState) => {
    const nuevoEstado = !prevState.mostrarVegetales;
    return {
      mostrarVegetales: nuevoEstado,
      mostrarFrutas: false,
    };
  }, () => {
    if (this.vegetalesRef.current && this.state.mostrarVegetales) {
      this.vegetalesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  });
};

  toggleFrutas = () => {
    this.setState((prevState) => {
      const nuevoEstado = !prevState.mostrarFrutas;
      return {
        mostrarFrutas: nuevoEstado,
        mostrarVegetales: false,
      };
    }, () => {
      if (this.frutasRef.current && this.state.mostrarFrutas) {
        this.frutasRef.current.scrollIntoView({ behavior: "smooth" });
      }
    });
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

  scrollToCar = () => {
    if(this.carroRef.current) {
      this.carroRef.current.scrollIntoView({ benavier: "smooth" })
this.setState({ esCarroVisible: true});
    }
  }
 

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
    const { carro, esCarroVisible, usuario , usuarioAutenticado, mostrarVegetales, mostrarFrutas} = this.state;
    const nombre = JSON.parse(localStorage.getItem("usuario")) || {
      nombre: "Invitado",
    };
    console.log("Usuario en localStorage:", nombre);

    return (
      <div className="App">
        <div ref={this.carroRef} className="content-1">
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

            <button onClick={this.scrollToProductos} className="btn-productos">Ver productos  </button>

                    </div>



        {/* 🔹 Referencia a la sección de productos */}
        <div className='layout-btns'> 

          <div ref={this.productosRef} className='content-btns'> 


          <h1 className='titulo-productos'> ¿Que productos desea ver? </h1>
<button className='btn-vegetales' onClick={this.toggleVegetales}> Vegetales </button> 
<button className='btn-frutas' onClick={this.toggleFrutas}> Frutas </button> 
          </div>




          </div>
               

        {mostrarVegetales && (
 <div ref={this.vegetalesRef}>
          <Layout>
            <Productos
              agregarAlCarro={this.agregarAlCarro}
              productos={this.state.productos}
            />
            <button className='ir-carro' onClick={this.scrollToCar}> Ir al pagar </button>
          </Layout>
        </div>

          
        )}
        {mostrarFrutas && (
<div  ref={this.frutasRef}>
          <Layout>
            <Frutas
              agregarAlCarro={this.agregarAlCarro}
              frutas={this.state.frutas}
            />
  <button className='ir-carro' onClick={this.scrollToCar}> Ir al pagar </button>

          </Layout>
        </div>



        )}
               <Footer />
      </div>
    );
  }
}

export default App;
