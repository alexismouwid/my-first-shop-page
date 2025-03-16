import { useState, useEffect } from "react";
import Button from "./Button";

const Producto = ({ producto, agregarAlCarro }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 600;
      console.log("Tamaño de pantalla:", window.innerWidth);
      console.log("isMobile cambiado a:", newIsMobile);
      setIsMobile(newIsMobile);
    };

    window.addEventListener("resize", handleResize);
    
    // Llamamos a handleResize inmediatamente para asegurar que el estado es correcto desde el inicio
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    producto: {
      backgroundColor: "#fff",
      padding: isMobile ? "5px" : "10px",
      margin: isMobile ? "5px" : "10px",
      borderRadius: "5px",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
      width: isMobile ? "120px" : "300px",
    },
    img: {
      width: "100%",
      height: isMobile ? "100px" : "200px",
    },
    titulo: {
      fontSize: isMobile ? "12px" : "16px",
    },
    precio: {
      fontSize: isMobile ? "10px" : "14px",
    },
  };

  return (
    <div style={styles.producto}>
      <img style={styles.img} src={producto.img} alt={producto.name} />
      <h3 style={styles.titulo}>{producto.name}</h3>
      <p style={styles.precio}>{producto.price}</p>
      <Button onClick={() => agregarAlCarro(producto)}>Agregar al carro</Button>
    </div>
  );
};

export default Producto;

