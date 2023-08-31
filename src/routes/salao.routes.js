const express = require('express');
const routes = express.Router();
const Salao = require('../models/salao')

router.post('/', async(req, res) =>{
    try{
        const salao = await new Salao(req.body).save();
        res.json({salao});
    } catch(err){
        res.json({err: true, message: err.message})
    }
});

module.exports = router;
