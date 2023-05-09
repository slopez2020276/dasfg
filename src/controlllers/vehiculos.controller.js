const Vehiculos = require('../models/vehiculos.model');
 
function AddVehiculo(req,res){
    var parametros = req.body;
    const ModelVehiculos = new Vehiculos();
    if (parametros.noComsegsa && parametros.placa && parametros.marcayLinea &&  parametros.modelo 
        && parametros.kilometraje && parametros.estado && parametros.estadoDePlaca && parametros.documentos && parametros.rotulados){

    } else if () {

    }
}