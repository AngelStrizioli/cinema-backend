var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var funcionSchema = new Schema({
    fecha: Date,
    agotado: Boolean,
    asientosOcupados: [String],
    sala: Number
});

var peliculaSchema = new Schema({
    nombre: String,
    funciones: [funcionSchema]
});

var Peliculas = mongoose.model('Pelicula', peliculaSchema);
console.log("se creo modelo");
module.exports = Peliculas;