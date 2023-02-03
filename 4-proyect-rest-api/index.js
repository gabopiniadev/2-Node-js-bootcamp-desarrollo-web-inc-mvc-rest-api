const express = require('express');
const router = require('./routes/index');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Conectar MongoDB
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/restapis', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Crear el Servidor
const app = express();

//Habilitar BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Rutas de la APP
app.use('/', router());

//Asignamos la IP del servidor
const port = 5000;
app.listen(port);