var Carro = require("../models/Carros.model")

function AddCarro(req,res){
    var parametres = req.body
    var modelCarro= new Carro();

    if (parametres.nombre && parametres.precio && parametres.categoria){
        modelCarro.nombre = parametres.nombre
        modelCarro.precio = parametres.precio
        modelCarro.categoria = parametres.categoria
        modelCarro.save((err,carroseved)=>{
            if (err){
                return res.status(500).send({message:'erro al guardar el carro'})
            } else if (carroseved){
                return res.status(200).send({message:'se guardo el carro correctamente',carroseved})
            }
        })

    }else {
        res.status(500).send({mesaje:'ingrese todos los valores'})
        
    }
}

module.exports= {
    AddCarro
}