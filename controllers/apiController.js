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

let getMapaAsientos = (req, res) =>
{
    let idBusqueda = {idSala: req.body.id}

    Salas.find(idBusqueda, function(err, salas){
        console.log(salas);
        res.status(200).send(generateMap(salas[0]));

        (err)=>{
            res.status(500).send(err);
            console.log(err);
        } 
    })
}

let getPeliByNombre = (req, res) =>
{
    console.log(req.body.name);

    let idBusqueda = {nombre: req.body.name}

    Peliculas.find(idBusqueda, function(err, listaPelis){
       
        res.status(200).send(listaPelis);
        
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        } 
    })

};

let getFuncionesByPeli = (req, res) =>
{
    console.log(req.body.name);

    let idBusqueda = {nombre: req.body.name}

    Peliculas.find(idBusqueda, function(err, listaPelis){
       
        res.status(200).send(listaPelis[0].funciones);
        
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        } 
    })
};

function generateMap(sala){
    let map = [];
    let id = 1
    for(let i = 0; i < sala.filas; i++){
        let row = [];
        for(let j=0; j < sala.asientosXFila; j++){
            let asiento = {id: id, number: j+1};
            row.push(asiento);
            id++;
        }
        map.push(row);
    }
    console.log(map);
    return map
}

module.exports = {getPelis, getSalas, getMapaAsientos, getPeliByNombre, getFuncionesByPeli};