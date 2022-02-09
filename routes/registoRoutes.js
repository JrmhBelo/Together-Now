var express = require('express');
var router = express.Router();
var rModel = require("../models/registoModel");

router.post("/", async function(req,res,next) { 
    console.log("Creating Registo");
      let newRegisto = req.body;
      let result = await rModel.saveRegisto(newRegisto); res.send(result); 
});

module.exports = router;