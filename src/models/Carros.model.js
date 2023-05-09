const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarrosSchema = Schema({
    nombre: String,
    categoria: String,
    precio: String,
});

module.exports = mongoose.model("Carros", CarrosSchema);