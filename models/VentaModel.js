var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tarjetaSchema = new Schema({
    cvc: String,
    expiry: String,
    issuer: String,
    name: String,
    number: String
});

var ventaSchema = new Schema({
    fecha: String,
    usuarioNombre: String,
    usuarioApellido: String,
    usuarioEmail: String,
    pelicula: String,
    sala: String,
    funcion: Date,
    asientos: [String],
    total: Number,
    tarjeta: tarjetaSchema
});

var Ventas = mongoose.model('Venta', ventaSchema);
console.log("se creo modelo");
module.exports = Ventas;