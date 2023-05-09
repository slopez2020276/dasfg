const mongoose = require('mongoose');
const app = require('./app');

mongoose.Promise = global.Promise; 
mongoose.set('strictQuery', false);                                                           
mongoose.connect('mongodb://127.0.0.1/SistemaDeMantenimiento', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Se encuentra conectado a la base de datos.");

    app.listen(3001, function () {
        console.log("Se esta corriendo en el puerto 3001")
    })

}).catch(error => console.log(error));