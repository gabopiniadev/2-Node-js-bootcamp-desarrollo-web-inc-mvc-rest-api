const { Router } = require('express');
const Clientes = require('../models/Clientes');

//Funcion agregar nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    const cliente = new Clientes(req.body);

    try{
        await cliente.save();
        res.json({mensaje: 'Se agrego un nuevo cliente'});
        
    }catch(error) {
        console.log(error);
        console.log('Tenemos Errores aqui!');
        next();
    }
}

//Funcion para mostrar clientes.
exports.mostrarClientes = async (req, res, next) => {

    try {
        const clientes = await Clientes.find({});
        res.json(clientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

//funcion para mostrar un cliente en especifico.
exports.mostrarClienteByID = async (req, res, next) => {

    try {
        const clienteByID = await Clientes.findById(req.params.idCliente);

        if(!clienteByID) {
            res.json({mensaje: 'El cliente no existe en la data'});
            next();
        }else{
            res.json(clienteByID);
        }

    } catch (error) {
        console.log(error);
        next();    
    }
}    

//Funcion para crear nuevos clientes!
exports.modificaCliente = async (req, res, next) => { 
    
    try {
        const clienteByID = await Clientes.findOneAndUpdate({ _id : req.params.idCliente},
        req.body, {
            new : true
        });
        res.json(clienteByID);
    } catch (error) {
        console.log(error);
        next();

    }
}

//Funcion para eliminar un registro
exports.deleteCliente = async (req, res, next) => {
    
    try {
        const clienteByID = await Clientes.findOneAndDelete({ _id : req.params.idCliente});
        res.json({mensaje: 'Cliente ha sido removido con exito!'});    
    } catch (error) {
        console.log(error);
        next();
    }
}