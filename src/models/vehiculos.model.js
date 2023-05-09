const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
var vehiculoSchema = ({
    
    noComsegsa: String,
    placa: String,
    marcayLinea: String,
    modelo: String,
    kilomentraje: String,
    estado: String,
    estadoDePlaca: String,
    documentos: String,
    rotulados: String,
    comentario: String,
    MantenimientosHechos:[ {type: Schema.ObjectId, ref: "RegistroDeMantenimiento"} ]
});

module.exports = mongoose.model("vehiculos", vehiculoSchema);