const express = require('express');
const dbConnect = require('./mongodb')
const app = express();

app.use(express.json());

app.put('/:name', async (req,res)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        // {name:'ronaldo'},
        {name:req.params.name},

        // 👆if we want to update the name too then we cannot pass the filter for the name because that name doesnot exist so we can pass it to the query  ---> at the search bar localhost://23456 (eg)
        {$set:req.body});
    // res.send({result: "updated"});
    console.log("updated!")
})

app.listen(5000);