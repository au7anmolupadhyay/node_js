// post get put delete using mongoose in nodejs and express

/*
const express = require('express');
require('./config');
const product = require('./products');

const app = express();
app.use(express.json());


app.post('/create', async (req,res)=>{
    let data = new product(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
})


// app.get('/read', async (req,res)=>{
//     let data = await product.find();
//     console.log(data);
//     res.send(data);
// })

app.put('/update/:name', async (req,res)=>{
    let data = await product.updateOne(
        req.params,
        {$set:req.body}
    )
    res.send(data);
})

app.delete('/delete/:name', async (req,res)=>{
    let data = await product.deleteOne(req.params);
    res.send(data);
})

// app.listen(4000);
*/



// search api, search with single field and multiple field
/*
app.get('/home/:key', async (req,res)=>{
    let data = await product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}}
            ]
        }
    )
    res.send(data);
})

app.listen(4000);

*/

const os = require('os');

console.log(os.freemem()/(1024*1024*1024));
