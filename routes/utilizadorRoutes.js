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

router.post('/login',async function(req, res, next) {
    let email = req.body.email;
    let password = req.body.pass;
    let result = await uModel.loginUtilizador(email,password);
    res.status(result.status).send(result.result);
});

router.get('/:id/eventos',async function(req, res, next) { 
    let utiId = req.params.id;
    console.log("Envio dos eventos incritos do utilizador " + utiId)
    let result = await uModel.getUtilizadorEventos(utiId);
    res.status(result.status).send(result.result);
});

router.get('/:id/estatisticas',async function(req, res, next) { // ☻
    let eveId = req.params.id;
    console.log ("Envio dos utilizadores registados no evento " +eveId)
    let result = await uModel.getUtilizadorEstatisticas(eveId);
    res.status(result.status).send(result.result);
});

module.exports = router;