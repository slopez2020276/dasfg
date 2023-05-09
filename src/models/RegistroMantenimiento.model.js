const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegistroDeMantenimiento = Schema({

    vehiculo: { type: Schema.Types.ObjectId, ref: 'vehiculos'},
    Mantenimientos:[{type: Schema.Types.ObjectId, ref: 'Mantenimientos'}],
    extras: Number,
    estado: String,
    total: Number,

})