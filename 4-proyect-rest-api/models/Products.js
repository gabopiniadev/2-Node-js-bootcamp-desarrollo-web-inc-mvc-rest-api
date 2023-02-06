const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    price: {
        type: Number
    },
    imagen: {
        type: String
    }
});

module.exports = mongoose.model('Products', ProductsSchema);

