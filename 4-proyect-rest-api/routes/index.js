const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

module.exports = function () {
    
    //Agregar Nuevos clientes
    router.post('/clientes', clienteController.nuevoCliente);

    
    return router;
}