const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const productoController = require('../controllers/productController');

module.exports = function () {
    
    /////////////////// CLIENTES ///////////////////
    //Agregar Nuevos clientes
    router.post('/clientes', clienteController.nuevoCliente);
    //Obtener todos los clientes
    router.get('/clientes', clienteController.mostrarClientes);
    //Obtener el cliente mediante el ID 
    router.get('/cliente/:idCliente', clienteController.mostrarClienteByID);
    //Modificar un cliente mediante el ID.
    router.put('/cliente/:idCliente', clienteController.modificaCliente);
    //
    router.delete('/cliente/:idCliente', clienteController.deleteCliente);
    ////////////////////////////////////////////////////////////////////////////

    //////////////////// PRODUCTOS ///////////////////

    //Agregar un nuevo producto!
    router.post('/products/add', productoController.nuevoProductos);
    //Modificar un producto mediante el ID
    router.put('/products/edit/:idProducts', productoController.modifyProducto);
    //Consultar todos los productos
    router.get('/products', productoController.obtenerProductos);
    //Consultar un producto mediante el ID
    router.get('/producto/:idProducts', productoController.obtenerProducto)
    //Eliminar un producto segun el ID
    router.delete('/products/delete/:idProducts', productoController.deleteProduct);
    ////////////////////////////////////////////////////////////////////////////

    //////////////////// PEDIDOS ///////////////////

    return router;
}