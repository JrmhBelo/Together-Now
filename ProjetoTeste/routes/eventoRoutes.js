var express = require('express');
var router = express.Router();
var eModel = require("../models/eventoModel");

router.get('/', async function(req, res, next) {
    console.log ("Enviando Eventos");
    let result = await eModel.getAllEventos();
    res.status(result.status).send(result.result);
});

router.get('/:id', async function(req, res, next) {
    let id = req.params.id;
    console.log("Sending Evento with id "+id);
    let result = await eModel.getEventoById(id);
    res.status(result.status).send(result.result);
  });


module.exports = router;
