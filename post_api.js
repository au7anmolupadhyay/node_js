const express = require('express');
const dbConnect = require('./mongodb')

const app = express();

app.use(express.json());

// 👆 this code is used in express application to parse the data into json format 
//  express.json() is a MIDDLEWARE, this middleware is responsible for parsing and transforming the JSON data into a JavaScript object

// express.json() is a built-in middleware function provided by the Express framework.
// app.use() is used to register middleware with the Express application.

app.post('/', async (req,res)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);
    // console.log({name:'anmol'});
    // res.send(req.body);
    console.log(req.body);
});

app.listen(5000);