const express = require('express');
const mongodb = require('mongodb');
const dbConnect = require('./mongodb');

const app = express();

app.use(express.json());


app.delete('/:id', async (req,res)=>{
    let data = await dbConnect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    res.send(result);
    console.log("deleted!")
});

app.listen(5000);