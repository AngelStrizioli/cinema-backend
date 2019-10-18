var Peliculas = require('../models/PeliculaModel');

    
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

module.exports = {getPelis};