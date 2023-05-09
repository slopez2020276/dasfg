const express = require("express");
const cors = require("cors");
const app = express();

const Carro = require("./src/routes/carros.routes");

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CABECERAS
app.use(cors());

app.use("/api",Carro)

module.exports = app;
