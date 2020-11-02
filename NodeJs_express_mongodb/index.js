const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/user.router')
var sanitizer = require('sanitizer');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


        app.use('/api', userRouter);

        app.listen(7000,()=>{
            console.log("app listen port 7000")
        });