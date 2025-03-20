import { Component } from "react";
import './DetallesCarro.css'
import { createRef } from "react";

class DetallesCarro extends Component {
 

  
  render() {
    const { carro, esCarroVisible, mostrarCarro, vaciarCarro} = this.props;
    console.log(carro);
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
              <img className='img-producto'
                alt={producto.name}
                src={producto.img}
                width="60px"
                height="40px"
              />
              {producto.name}
              <span >{'\n'}{producto.cantidad}</span>
              <span>${producto.price}</span>
              <button className='borrar'> x </button>
            </li>
          ))}
        </ul>
          
        </div>


        <div className='end-btns'>
          <button onClick={vaciarCarro} className='deleteall'>
<img className='deteleall-img' src="/borrar.png" alt="borrar" width="15px" />
          </button>
 <button ref={this.refTotal} className='total'> Ir a pagar                
          Subtotal: {carro.reduce((acc, el) => acc + el.price, 0)}
        </button>


        </div>
                    </div>
   
    );
  }
}

export default DetallesCarro;
