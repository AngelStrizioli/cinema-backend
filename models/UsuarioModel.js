var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    nombre:String,
    apellido:String,
    dni:String,
    telefono:String,
    email: String,
    password:String
});

var Usuarios = mongoose.model('Usuario', UsuarioSchema);
console.log("se creo modelo");
module.exports = Usuarios;