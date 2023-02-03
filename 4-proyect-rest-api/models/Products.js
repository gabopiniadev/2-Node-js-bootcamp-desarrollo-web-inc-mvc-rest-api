const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    precio:{
        
    }
})