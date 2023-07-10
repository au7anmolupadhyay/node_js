const express = require('express');
const dbConnect = require('./mongodb');

const app = express();

// app.use(express.json());

app.get('/',async (req,res)=>{
    let db = await dbConnect();
    let data = await db.find().toArray();
    res.send(data);
});

// app.post('/',(req,res)=>{
//     console.log(req.body);
//     res.send({name:'anmol'})
// })

app.listen(4000);