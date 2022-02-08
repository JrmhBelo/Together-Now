var express = require('express');
var router = express.Router();
var gModel = require("../models/gesModel");

router.get('/', async function(req, res, next) { // esta ok
    console.log ("Enviando gestores");
    let result = await gModel.getAllGestores();
    res.status(result.status).send(result.result);
});

router.get('/:id/', async function(req, res, next) { // esta ok 
	let id = req.params.id; // ☻
    console.log ("Enviando gestor com id " + id); 
    let result = await gModel.getGestorById(id); 
    res.status(result.status).send(result.result);
});

router.post('/login',async function(req, res, next) { // esta ok 
    let email = req.body.email;
    let password = req.body.pass;
    let result = await gModel.loginGestor(email,password);
    res.status(result.status).send(result.result);
});

module.exports = router;
