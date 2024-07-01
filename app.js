const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log('In the middleware!');
    next();   //Allows the middleware conitinue to the next middleware.
}); //allows us to add middleware

app.use((req,res,next)=>{
    console.log('In another middleware!');
    res.send('<h1>Hello from express!</h1>');

});

app.listen(3000);