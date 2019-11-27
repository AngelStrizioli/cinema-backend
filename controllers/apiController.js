var Peliculas = require('../models/PeliculaModel');
var Salas = require('../models/SalaModel');
var Usuarios = require('../models/UsuarioModel');
var Ventas = require('../models/VentaModel');


    
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
    asientos = req.body.asientosOcupados;
    console.log(asientos);
    Salas.find(idBusqueda, function(err, salas){
        console.log(salas);
        res.status(200).send(generateMap(salas[0], asientos));

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

let insertVenta = (req,res) =>
{
    console.log(req.body);
    var newVenta = Ventas({
        fecha: req.body.fecha,
        usuarioNombre: req.body.usuarioNombre  ,
        usuarioApellido: req.body.usuarioApellido,
        usuarioEmail: req.body.usuarioEmail,
        pelicula: req.body.pelicula,
        sala: req.body.sala,
        funcion: req.body.funcion,
        asientos: req.body.asientos,
        total: req.body.total,
        tarjeta: req.body.tarjeta
    });
    newVenta.save().
    then
    (
        (newVenta)=>
        {
            res.status(201).send(newVenta); //devuelvo resultado query       
        },
        (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }
    ) 
};


let getVentasUsuario = (req,res) => {
    let idBusqueda = { usuario: req.body.username };

    Ventas.find(idBusqueda, function(err,listaVentas){
        
        console.log(listaVentas);
        res.status(200).send(listaVentas);
        
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        } 
    })
}

function arrayIncludes(array, numero){
    let resultado = false;
    for(let i = 0; i<array.length; i++){
        if(array[i]==numero){
           resultado = true;
        }
    }
    return resultado;
}

function generateMap(sala, asientosOcupados){
    let map = [];
    let id = 1
    for(let i = 0; i < sala.filas; i++){
        let row = [];
        for(let j=0; j < sala.asientosXFila; j++){
            let asiento = {id: id, number: j+1, isReserved: false};
            if(arrayIncludes(asientosOcupados, asiento.id))
              asiento.isReserved=true;
            row.push(asiento);
            id++;
        }
        map.push(row);
    }
    console.log(map);
    return map;
}

let registrarUsuario = (req,res) =>
{
    console.log(req.body);
    var newUsuario = Usuarios({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni,
        telefono: req.body.telefono,
        email: req.body.mail,
        password: req.body.password
    });
    newUsuario.save().
    then
    (
        (newUsuario)=>
        {
            res.status(201).send(newUsuario); //devuelvo resultado query       
        },
        (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }
    ) 
}

let comprobarUsuario = (req, res) => {

    let idBusqueda = {email: req.body.email}

    Usuarios.find(idBusqueda, function(err, listaUsuarios){
        if(listaUsuarios.length === 0){
            res.status(400).send(false);
        }else{
   
        if(listaUsuarios[0].password === req.body.password){
            res.status(200).send(listaUsuarios[0]);
        }
        else{
            res.status(400).send(false);
        }
    }
        (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }
        
    })


}

module.exports = {getPelis, getSalas, getMapaAsientos, getPeliByNombre, getFuncionesByPeli, insertVenta, getVentasUsuario, registrarUsuario, comprobarUsuario};
