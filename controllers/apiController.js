var Peliculas = require('../models/PeliculaModel');
var Salas = require('../models/SalaModel')

    
let getPelis = (req, res) =>
{      
    console.log("llegue a leer");
    //Listar resultados
    Peliculas.find(function(err,listaPelis)
    {
        //devuelvo resultado query
        res.status(200).send(listaPelis);
        //si hay error
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        } 
    });
           
};

let getSalas = (req, res) =>
{
    console.log("lei las salas")

    Salas.find(function(err,listaSalas)
    {
        res.status(200).send(listaSalas);

        //si hay error
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        } 
    });
};

module.exports = {getPelis, getSalas};