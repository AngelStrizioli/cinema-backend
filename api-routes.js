// Initialize express router
let router = require('express').Router();
let apiController = require('./controllers/apiController');
       
    

// Set default API response
router.get('/', function (req, res) 
{
    res.json(
    {
       status: 'API is Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

//EndPoint para leer toda la base
router.get('/leerPelis',function(req,res)
{
    console.log("leer");
    apiController.getPelis(req,res);
});

/*
//EndPoint para leer con filtro
router.post('/leerAgenda/?idBusqueda',function(req,res)
{
    console.log("leer con filtro");
    apiController.getContactosById(req,res);
});
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

