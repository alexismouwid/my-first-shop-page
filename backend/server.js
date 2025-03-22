const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3000;
const { Auth, isAuthenticated} = require("./routes/auth"); // Importamos solo Auth

mongoose
  .connect("mongodb://localhost:27017/miBaseDeDatos") // Cambia "tudatabase" por el nombre de tu base de datos
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("Error conectando a MongoDB:", err));
// Middleware
app.use(cors());
app.use(express.json());

// Rutas de autenticación
app.post("/login", Auth.login);
app.post("/register", Auth.register);
app.post("/orders", isAuthenticated, Auth.createOrder);

app.listen(port, () => console.log(`🚀 Servidor corriendo en puerto ${port}`));
