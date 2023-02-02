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