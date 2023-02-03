const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

module.exports = function () {


    //Buscar a todos los clientes de la
    router.get('/clientes', clienteController.mostrarClientes);
    
    //Buscar cliente por id
    router.get('/cliente/:idCliente', clienteController.mostrarClienteByID)

    //Agregar Nuevos clientes
    router.post('/clientes', clienteController.nuevoCliente);

    //Modificar cliente por id
    router.put('/cliente/:idCliente', clienteController.modificaCliente);

    //Eliminar el cliente por el id
    router.delete('/cliente/:idCliente', clienteController.deleteCliente);

    
    return router;
}