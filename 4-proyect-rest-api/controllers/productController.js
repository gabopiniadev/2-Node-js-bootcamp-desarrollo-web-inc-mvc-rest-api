const Products = require('./../models/Products');

const multer = require('multer');
const shortid = require('shortid');

const configurationMulter = {
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname + '../../resources/img/');
        },
        filename: (req, file, cb) => {
            const extension = file.mimetype.split("/")[1];
            cb(null, `${shortid.generate()}.${extension}`);
        }
    }),
    fileFilter(req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error('Formato incorrecto'))
        }    
    },
}

//pasar la configuracion y el campo
const upload = multer(configurationMulter).single('imagen');

//Subir archivo
exports.subirArchivo = (req, res, next) => {
    upload(req, res, function(error) {
        if(error) {
            res.json({mensaje: error})
        }

        return next();
    })
}

//Agregar nuevos productos
exports.nuevoProductos = async (req, res, next) => {
    const products = new Products(req.body);

    try {
        if(req.file.filename) {
            products.imagen = req.file.filename
        }
        await products.save();
        res.json({ mensaje: 'Se agrego correctamente el articulo!' });
    } catch (error) {
        console.error(error);
        next();
    }

}

exports.modifyProducto = async (req, res, next) => {
    
    try {

        let nuevoProducto = req.body;
        console.log(nuevoProducto);

        if(req.file) {

            nuevoProducto.imagen = req.file.filename;

        }else{

            let articuloAntes = await Products.findById(req.params.idProducts);
            nuevoProducto.imagen = articuloAntes.imagen;

        }

        let productoByID = await Products.findOneAndUpdate({ _id: req.params.idProducts },
            nuevoProducto, {
            new: true
        });
        
        res.json(productoByID);

    } catch (error) {
        console.error(error);
        next();
    }
}

exports.obtenerProducto = async (req, res, next) => {

    try {
        const productoByID = await Products.findById(req.params.idProducts);

        if(!productoByID) {
            res.json({mensaje: 'El Producto no existe en la data'});
            next();
        }else{
            res.json(productoByID);
        }

    } catch (error) {
        console.log(error);
        next();    
    }

}

exports.obtenerProductos = async (req, res, next) => {

    try {
        const productos = await Products.find({});
        res.json(productos);
    } catch (error) {
        console.log(error);
        next();
    }

}

exports.deleteProduct = async (req, res, next) => {
   
    try{
        const productoByID = await Products.findOneAndDelete({_id : req.params.idProducts});
        res.json({mensaje: `El producto ${productoByID} ha sido eliminado existosamente.`})
    }catch(error) {
        console.log(error);
        next();
    }
}    
