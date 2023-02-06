const Products = require('./../models/Products');

const multer = require('multer');
const shortid = require('shortid');

const configurationMulter = {
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname + '../resources/img/');
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
const upload = multer(configuracionMulter).single('imagen');

//Agregar nuevos productos
exports.nuevoProductos = async (req, res, next) => {
    const products = new Products(req.body);

    try {
        await products.save();
        res.json({ mensaje: 'Se agrego correctamente el articulo!' });
    } catch (error) {
        console.error(error);
        next();
    }

}

exports.modifyProducto = async (req, res, next) => {
    try {
        const productoByID = await Products.findOneAndUpdate({ _id: req.params.idProducts },
            req.body, {
            new: true
        });
        res.json(productoByID);
    } catch (error) {
        console.error(error);
        next();
    }
}

exports.obtenerProducto = async (req, res, next) => {

}

exports.obtenerProductos = async (req, res, next) => {


}

exports.delteProducto = async (req, res, next) => {

}    
