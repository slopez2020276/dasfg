const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var MantenimientosSchema= ({

    nombre: String,
    motor : [],
    chasisCarroseria:[],
    Precio: Number,

});

module.exports = mongoose.module("Mantenimientos",MantenimientosSchema)