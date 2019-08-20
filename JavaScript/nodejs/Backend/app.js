'use strict'
//Optener las librerias
var express = require('express');
var bodyParser = require('body-parser');
//Ejecutar express
var app = express();

//cargar archivos de rutas

//middlewares (Una capa que se ejecuta antes de la accion de un controlador)
//middleware global, configracion necesaria para bodyparser
app.use(bodyParser.urlencoded({extended:false}));
//Todo lo que le llege convierta en formato Json
app.use(bodyParser.json());

//CORS

//rutas
app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Pagina de inicio</h1>"
    );
});
app.post('/test', (req, res) => {
    console.log(req.body.nombre);
    res.status(200).send({
        message: "Hola mundo desde mi API de NodeJs"
    });
});
//  exportar modulo
module.exports = app;