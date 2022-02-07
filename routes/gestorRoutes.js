var express = require('express');
var router = express.Router();
var gModel = require("../models/gesModel");

router.get('/', async function(req, res, next) { // novo, falta query
    console.log ("Enviando gestores");
    let result = await gModel.getAllGestores();
    res.status(result.status).send(result.result);
});

router.get('/:id/', async function(req, res, next) { // novo, falta query
	console.log ("Enviando gestor com id " + id); 
    let result = await gModel.getGestorById(id); 
    res.status(result.status).send(result.result);
});