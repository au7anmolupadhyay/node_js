// connected nodejs with mongodb and showed the database from mongodb
/*
const {MongoClient} = require('mongodb');
// modern way to import mongodb 👆
// another way 👇
// const MongoClient = require('mongodb').MongoClient;

// our node js dont know where is our mongodb so we are telling the path

const url = 'mongodb://127.0.0.1:27017/';
const database = 'e-commerce';
const client = new MongoClient(url);

// MongoClient is a class provided by the MongoDB Node.js driver. It is used to establish a connection to a MongoDB server and interact with the database.👆

async function getData(){
    try{
    let result = await client.connect();

    // connect is a method provided by the 'MongoClient' class from the MongoDB Node.js driver.👆


    let db = result.db(database);

    //👆 db method is a function provided by the MongoClient instance, and it is used to access a specific database within the MongoDB server. The db method takes the name of the database as a parameter.


    let collection = db.collection('products');
    let response = await collection.find({}).toArray();
    console.log(response);
}
catch(e){
    console.log(e);
}
}

getData();
*/



const dbConnect = require('./mongodb')


// console.log(dbConnect());

// 👇using .THEN() chaining two handle promises
/*
dbConnect().then((data)=>{
    data.find().toArray().then((resp)=>{
        console.warn(resp);
    });
})
*/

// 👇 inside a function using ASYNC and AWAIT
/*
const main = async ()=>{
    let data = await dbConnect();
    result = await data.find().toArray();
    console.log(result);
}

main();
*/
