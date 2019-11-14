var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tarjetaSchema = new Schema({
    numero: String,
    fechaVto: String,
    codSeg: String,
    nombre: String
});

var ventaSchema = new Schema({
    id: Number,
    pelicula: String,
    funcion: String,
    asientos: [String],
    total: Number,
    usuario: String,
    fecha: Date,
    tarjeta: tarjetaSchema
});

var Ventas = mongoose.model('Venta', ventaSchema);
console.log("se creo modelo");
module.exports = Ventas;