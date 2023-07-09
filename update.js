const dbConnect = require("./mongodb");

const update = async ()=>{
    const db = await dbConnect();
    const result = await db.updateMany(
        {name:'red pen'}, {$set:{name:"red gel pen",price:21345}}
    );
}

update();