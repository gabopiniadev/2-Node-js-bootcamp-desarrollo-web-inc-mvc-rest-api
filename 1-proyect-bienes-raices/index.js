import express from "express";
import usuarioRouting from "./routing/usuarioRouting.js";
//const express = require('express');

//Crear la App
const app = express();

//routing routes
app.use('/', usuarioRouting);

//define un puerto server.
const port = 3000;
app.listen(port, () =>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})