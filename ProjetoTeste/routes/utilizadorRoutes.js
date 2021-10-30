var express = require('express');
var router = express.Router();
var uModel = require("../models/utilizadorModel");

router.get('/', async function(req, res, next) {
    console.log ("Enviando utilizadores");
    let result = await uModel.getAllUtilizadores();
    res.status(result.status).send(result.result);
});

router.get('/:id/', async function(req, res, next) {
    let id = req.params.id;
	console.log ("Enviando utilizador com id " + id);
    let result = await uModel.getUtilizadorById(pos); 
    res.status(result.status).send(result.result);
});

module.exports = router;