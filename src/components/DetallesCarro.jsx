import { Component } from "react";
import './DetallesCarro.css'
import { createRef } from "react";

class DetallesCarro extends Component {
 

  
  render() {
    const { carro } = this.props;
    console.log(carro);
    return (
      <div className='detallesCarro'>
        <ul className='lista-productos'>
          {carro.map((producto) => (
            <li key={producto.name} className='propiedades'>
              <img className='img-producto'
                alt={producto.name}
                src={producto.img}
                width="60px"
                height="40px"
              />
              {producto.name}
              <span >{producto.cantidad}</span>
              <span>{producto.price}</span>
              <button className='borrar'> x </button>
            </li>
          ))}
        </ul>
        <span ref={this.refTotal} className='total'>
          Total: {carro.reduce((acc, el) => acc + el.price, 0)}
        </span>
      </div>
    );
  }
}

export default DetallesCarro;
