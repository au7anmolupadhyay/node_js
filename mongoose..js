/*
mongoose.schema jo hai na yeh humara mongodb ke database ka jo collection hai na uske structure ko define karta hai
here we specify which fields to be used, datatypes.

mongoose.models represents the instances of mongodb collection document where we store our data


*/

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/e-commerce');
const productsSchema = new mongoose.Schema({name:String});

// save in database using mongoose
/*
const saveInDb = async ()=>{
    const products = mongoose.model('products',productsSchema);
    let data = new products(
        {name:"anmol",
        brand:"au7"}
    )
    let result = await data.save();
    console.log(result);
}

    saveInDb();
*/

// update in db using mongoose

/*
const updateInDb = async ()=>{
    const products = mongoose.model('products', productsSchema);
    const data = await products.updateOne(
        {name:"rorito blue pen"},
        {$set:{name:"rorito pen",price:120}}

        // 👆 in the above line after executing we dont see any change because in the schema above we have restricted our field to only name
        );
        console.log(data);
}

    updateInDb();
*/


// delete in db using mongoose

/*
const deletInDb = async ()=>{
    const product = await mongoose.model('products',productsSchema);
    const data = await product.deleteOne({name:"cr7"});
}

deletInDb();
*/

// find data in db using mongoose

/*
const findInDb = async ()=>{
    const product = await mongoose.model('products',productsSchema);
    const data = await product.find();
    console.log(data);
}

findInDb();
*/