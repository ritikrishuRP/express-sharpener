const path = require('path');

const express = require('express')

const router = express.Router();

router.get('/success',(req,res,next)=>{
    res.send("Form successfuly filled");
});

module.exports = router;