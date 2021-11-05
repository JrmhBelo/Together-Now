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

router.post("/", async function(req,res,next) { 
  console.log("Creating Evento");
    let evento = req.body;
    let result = await eModel.saveEvento(evento); res.send(result); 
  });

router.get('/:id/gestor', async function(req, res, next) {
    let id = req.params.id;
    console.log("Sending All Eventos with ges_id "+id);
    let result = await eModel.getAllEventosByGestorId(id);
    res.status(result.status).send(result.result);
  });

router.put("/:id/estado", async function(req,res,next) { 
  console.log("Updating Evento with eve_id "+id);
  let newEstado = req.body;
  let result = await eModel.changeEstado(newEstado); res.send(result); 
  }); 

router.post("/", async function(req,res,next) { 
  console.log("Creating Registo");
    let newRegisto = req.body;
    let result = await eModel.saveRegisto(newRegisto); res.send(result); 
  });
    
    
module.exports = router;
