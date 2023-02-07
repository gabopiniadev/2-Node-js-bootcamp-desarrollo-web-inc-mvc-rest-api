const Pedidos = require('../models/Pedidos.js');

//Controllador para agregar pedidos!
exports.agregarPedido = async (req, res, next) => {
    
    const pedidos = new Pedidos(req.body);

    try {

        await pedidos.save();
        res.json({ mensaje: 'El pedido a sido creado con exito!' })


    } catch (error) {
        console.log(error);
        next();
    }

}

//
exports.obtenerPedidos = async (req, res, next) => {

    try {
        const pedidos = await Pedidos.find({}).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'Products'
        });

        res.json(pedidos);
    } catch (error) {
        console.log(error);
        next();
    }

}

//
exports.obtenerPedido = async (req, res, next) => {

    try {
        const pedido = await Pedidos.findById(req.params.idPedidos).populate('cliente').populate({
            path: 'pedido.producto',
            model: 'Products'
        });
        res.json(pedido);
    } catch (error) {
        console.log(error);
        next();
    }


}

//
exports.modificarPedido = async (req, res, next) => {

    try {
        const pedidoByID = await Pedidos.findOneAndUpdate({_id : req.params.idPedidos},
            req.body, {
                new: true
            }).populate('cliente').populate({
                path: 'pedido.producto',
                model: 'Products'
            });
        res.json(pedidoByID);
    } catch (error) {
        console.log(pedidoByID);
        next();
    }

}

//
exports.eliminarPedido = async (req, res, next) => {

    try {
        await Pedidos.findOneAndDelete({_id : req.params.idPedidos})
        res.json({mensaje: `El pedido ha sido eliminado con exito!`})
    } catch (error) {

        console.log(error);
        next();
        
    }

}