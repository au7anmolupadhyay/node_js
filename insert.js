const dbConnect = require('./mongodb');

const insert = async ()=>{
    const db = await dbConnect();

    // 👇 here we have used await because if we console.log we will be getting promise therefore we wont be able to find whether we have inserted our data or not so we used our AWAIT keyword to put a checkmark.
    const result = await db.insertMany([
        {name:'black dot',brand:'natraj',price: 12},
        {name:'red dot',brand:'cello',price: 10},
    ])
    // console.log(result.acknowledged);
    console.log(result);
    // 👆this will return a promise that's why wee used a await keyword
    ;
}

insert();