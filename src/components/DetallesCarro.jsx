import { Component } from "react";
import './DetallesCarro.css'
import { createRef } from "react";
import axios from "axios";

class DetallesCarro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarFormulario: false,
      address: "",
      phone: "",
    };
    this.formularioRef = createRef();
  }

  toggleFormulario = () => {
    this.setState((prevState) => ({
      mostrarFormulario: !prevState.mostrarFormulario,
    }), () => {


      if(this.state.mostrarFormulario && this.formularioRef.current){
        this.formularioRef.current.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
 
 hacerPedido = async () => {
  const { carro } = this.props;
  const { address, phone } = this.state;
  const token = localStorage.getItem("token"); // Obtener el token JWT

  // Preparar los productos para el pedido
  const products = carro.map((producto) => ({
    
    name: producto.name,
    quantity: producto.cantidad,
    price: producto.price,
    subtotal: carro.price * producto.cantidad,
  }));

  // Crear el payload para enviar al backend
  const payload = {
    products,
    address,
    phone,
  };

  try {
    // Enviar la solicitud POST con axios
    const response = await axios.post("http://localhost:3000/orders", payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Enviar el token JWT
      },
    });

    // Si la solicitud es exitosa
    console.log("Pedido creado:", response.data);
    alert("Pedido creado exitosamente");
    this.props.vaciarCarro(); // Vaciar el carrito después de crear el pedido
    this.setState({ mostrarFormulario: false }); // Ocultar el formulario
  } catch (error) {
    // Manejar errores
    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      console.error("Error:", error.response.data);
      alert("Error al crear el pedido: " + error.response.data.message);
    } else if (error.request) {
      // La solicitud fue hecha pero no se recibió respuesta
      console.error("Error:", error.request);
      alert("Error al conectar con el servidor");
    } else {
      // Algo más causó el error
      console.error("Error:", error.message);
      alert("Error inesperado");
    }
  }
};
  
  render() {
    const { carro, esCarroVisible, mostrarCarro, vaciarCarro, eliminarDelCarro} = this.props;

const { mostrarFormulario, address, phone} = this.state;
    return (
       <div className='detallesCarro'>
        <div className='overlay'>
          <h2 className='title-carrito'>Tu canasta</h2>
          <button onClick={mostrarCarro} className='cerrar-btn'>
            <img className='cerrar-img' src="/cerrar.png" alt="cerrar" width="30px" />
          </button>
        </div>

        <div className='props-prod'>
          <ul className='lista-productos'>
            {carro.map((producto) => (
              <li key={producto.name} className='propiedades'>
                <img
                  className='img-producto'
                  alt={producto.name}
                  src={producto.img}
                  width="60px"
                  height="40px"
                />
                {producto.name}
                <span>{producto.cantidad}</span>
                <span>${producto.price}</span>
                <button onClick={() => eliminarDelCarro(producto)} className='borrar'>
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className='end-btns'>
          <button title="Eliminar todo" onClick={vaciarCarro} className='deleteall'>
            <img className='deteleall-img' src="/borrar.png" alt="borrar" />
          </button>
          <button onClick={this.toggleFormulario} className='total'>
            Haz el pedido
            <br />
            Subtotal: {carro.reduce((acc, el) => acc + el.price * el.cantidad, 0)}
          </button>
        </div>

        {/* Formulario para dirección y teléfono */}
        {mostrarFormulario && (
          <div className='formulario-pedido' ref={this.formularioRef}>
            <h3>Completa tu pedido</h3>
            <input
              type="text"
              name="address"
              placeholder="Dirección"
              value={address}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Teléfono"
              value={phone}
              onChange={this.handleInputChange}
            />
            <button onClick={this.hacerPedido}>Confirmar pedido</button>
            <button onClick={this.toggleFormulario}>Cancelar</button>
          </div>
        )}
      </div>
    ); 
  }
}

export default DetallesCarro;
