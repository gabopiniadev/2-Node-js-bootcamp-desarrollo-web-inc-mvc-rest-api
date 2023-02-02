const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

module.exports = function () {
    
    //Agregar Nuevos clientes
    router.post('/clientes', clienteController.nuevoCliente);

    //Obtener todos los clientes
    router.get('/clientes', clienteController.mostrarClientes);

    //Obtener el cliente mediante el ID 
    router.get('/cliente/:idCliente', clienteController.mostrarClienteByID);
    
    //Modificar un cliente mediante el ID.
    router.put('/cliente/:idCliente', clienteController.modificaCliente);

    router.delete('/cliente/:idCliente', clienteController.deleteCliente);

    
    return router;
}