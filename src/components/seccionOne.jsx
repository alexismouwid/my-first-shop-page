import React, { Component } from "react";
import './SeccionOne.css';

class SeccionOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      isTransitioning: true, // Controla si el carrusel está en transición
    };
    this.images = ["/imagen1.jpg", "/imagen2.jpg", "/imagen3.jpg"];
  }

  componentDidMount() {
    this.startCarousel();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.pauseTimeout);
  }

  startCarousel = () => {
    this.interval = setInterval(() => {
      const { currentImage } = this.state;

      // Si estamos en la última imagen, pausamos antes de reiniciar
      if (currentImage === this.images.length - 1) {
        this.setState({ isTransitioning: false }); // Detenemos la transición
        this.pauseTimeout = setTimeout(() => {
          this.setState({ currentImage: 0, isTransitioning: true }); // Reiniciamos
        }, 3000); // Pausa de 3 segundos
      } else {
        this.setState((prevState) => ({
          currentImage: prevState.currentImage + 1,
          isTransitioning: true,
        }));
      }
    }, 3000); // Intervalo de 3 segundos
  };

  render() {
    const { currentImage, isTransitioning } = this.state;
    return (
      <div className="content-2">
        <div
          className="carousel-container"
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
            transition: isTransitioning ? "transform 1s ease-in-out" : "none",
          }}
        >
          {this.images.map((image, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
        <h1>Productos del campo</h1>
      </div>
    );
  }
}

export default SeccionOne;
