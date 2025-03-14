const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3000;
const { Auth } = require("./routes/auth"); // Importamos solo Auth

const uri = "mongodb://localhost:27017/miBaseDeDatos";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error al conectar a MongoDB:", err));

// Middleware
app.use(cors());
app.use(express.json());

// Rutas de autenticación
app.post("/login", Auth.login);
app.post("/register", Auth.register);

app.listen(port, () => console.log(`🚀 Servidor corriendo en puerto ${port}`));
