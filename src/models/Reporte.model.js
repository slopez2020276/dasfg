const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var reporteSchema = ({

    vehiculo: { type: Schema.Types.ObjectId, ref: 'vehiculos'},
    Mantenimientos:[{type: Schema.Types.ObjectId, ref: 'Mantenimientos'}],
    extras: Number,
    estado: String,
    total: Number,

})
module.exports = mongoose.model("reportes", reporteSchema);
