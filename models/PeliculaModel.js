var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var peliculaSchema = new Schema({
    nombre: String,
    sala: String,
});

var Peliculas = mongoose.model('Pelicula', peliculaSchema);
console.log("se creo modelo");
module.exports = Peliculas;