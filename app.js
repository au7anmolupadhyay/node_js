// setting input in command line- creating a file and deleting it inside the command line

/*
const fs = require("fs");
const input = process.argv;

if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3],input[4]);
}
else{
    console.log("invalid");
}
*/



// middleware

// Application-level middleware
/*
const express = require('express');
const app = express();

const reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send("please enter the age");
    }
    else if(req.query.age<18){
        res.send("sorry you are not allowed to access this page!");
    }
    else{
        next();
    }
}

// app.use(reqFilter);

app.get('',(req,res)=>{
    res.send("welcome to the home page!")
});

app.get('/contact',reqFilter,(req,res)=>{
    res.send("welcome to our contact page");
});


app.listen(5000);



// Route level middleware -         to use for particulare route - (can also be used to apply middleware for all the routes)
// app.use('/contact',reqFilter);

*/

// middleware in another file and using express router function for applying middleware to many routes
/*
const reqFilter = require('./middleware')
const express = require('express');
const app = express();
const router = express.Router();

router.use(reqFilter);

app.get('',(req,res)=>{
    res.send("welcome to the home page!")
});

app.get('/contact',(req,res)=>{
    res.send("welcome to our contact page");
});

router.get('/help',(req,res)=>{
    res.send("welcome to the help page!")
});

router.get('/about',(req,res)=>{
    res.send("welcome to our about page");
});

app.use('',router)

app.listen(5000);
*/




