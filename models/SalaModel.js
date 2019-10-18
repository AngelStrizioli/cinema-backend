var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var salaSchema = new Schema({
    idSala: String,
    pelicula: String,
    horarios: [String]
});

var Salas = mongoose.model('Sala', salaSchema);
console.log("se creo modelo");
module.exports = Salas;