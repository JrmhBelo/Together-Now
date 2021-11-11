var express = require('express');
var router = express.Router();
var pModel = require("../models/participoModel");

router.post("/", async function(req,res,next) { 
    console.log("Creating Participo");
      let newParticipo = req.body;
      let result = await pModel.saveParticipo(newParticipo); res.send(result); 
    });

module.exports = router;