// Initialize express router
let router = require('express').Router();
let apiController = require('./controllers/apiController');
       
    

// Set default API response
router.get('/default', function (req, res) 
{
    res.json(
    {
       status: 'API is Working',
       message: 'Que onda monóculo todo viento?',
    });
});

//EndPoint para lee las pelis
router.get('/leerPelis',function(req,res)
{
    console.log("pelis");
    apiController.getPelis(req,res);
});


//endpoint para leer las salas
router.get('/leerSalas',function(req,res)
{
    console.log("salas");
    apiController.getSalas(req,res);
});


//EndPoint para leer con filtro
//USAR POSTMAN PARA PROBAR
router.post('/filtrarpeli',function(req,res)
{
    console.log("filtrarPeli");
    apiController.getPeliByNombre(req,res);
});

//recibe el id de una sala y devuelve el json con el mapa de los asientos
router.post('/getMapa',function(req,res)
{
    console.log("getMapa");
    apiController.getMapaAsientos(req,res);
});

router.post('/getFunciones',function(req,res)
{
    console.log("getFunciones");
    apiController.getFuncionesByPeli(req,res);
});

//EndPoint para registrar un usuario en la BD
router.post('/RegistrarUsuario/Usuario',function(req,res)
{
    console.log(req.body);
    apiController.registrarUsuario(req,res);
});


router.post('/guardarVenta', function(req,res){
    console.log('guardando venta');
    apiController.insertVenta(req,res);
});


router.post('/getVentasUsuario', function(req,res){
    console.log('obteniendo ventas del usuario');
    apiController.getVentasUsuario(req,res);
});

router.post('/comprobarUsuario', function(req,res){
    console.log('comprobando el login del usuario');
    apiController.comprobarUsuario(req,res);
})


router.post('/ocuparAsientos', function(req,res){
    console.log('ocupando asientos');
    apiController.ocuparAsientos(req,res);
})
/*


//EndPoint para insertar en la BD
router.post('/insertContacto/Contacto',function(req,res)
{
    console.log(req.body);
    apiController.insertContacto(req,res);
});

//EndPoint para modificar en la BD
router.post('/updateContacto/Contacto',function(req,res)
{
    apiController.updateContacto(req,res);
});

//EndPoint para eliminar en la BD
router.delete('/deleteContacto/Contacto',function(req,res)
{
    apiController.deleteContacto(req,res);
});
*/


// Export API routes
module.exports = router;

