// creating a my first server 

/*
const http = require("http")

http.createServer((req,res)=>{
    res.writeHead(100, {"Content-Type": 'application\json'});
    res.write(JSON.stringify({name: "Anmol Upadhyay", email: "anmolupadh@gmail.com"}));
    res.end();
}).listen(4200);
*/


// path module - creating files using command line
/*
const fs = require("fs")
const path = require("path")

const dirPath = path.join(__dirname, 'files');

for(i=0; i<5; i++){
    fs.writeFileSync(dirPath + `/hello ${i} .txt`, "a simple file");
}
*/


// read and list

/*
const fs = require("fs")
const path = require("path")
console.log(__dirname)
const dirPath = path.join(__dirname, "files");

fs.readdir(dirPath, (err, files)=>{
    console.log(files);
})
*/


// how to read individual file

/*
const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "files");
fs.readdir(dirPath,(err,file)=>{
    file.forEach((item)=>{
        console.log(item);
    })
})
*/

// CRUD with file system

/* - use it before every operation down below (importing modules and using it before implementing crud)
const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/webd.txt`;
*/

/* create
fs.writeFileSync(`${dirPath}/webd.txt`, "this is web development course");
*/

/*Read

fs.readFile(`${dirPath}/webd.txt`, 'utf-8', (err,item)=>{
        console.log(item);    
});

// update

/*
fs.appendFile(filePath, " and machine learning course! (has been newly added)" , (err,item)=>{
    if(!err){
        console.log("no error")
    }
});

*/

// rename
/*
fs.rename(filePath , `${dirPath}/courses.txt`, (err, item)=>{
    if(!err){
        console.log("no error ji");
    }
});

*/


// delete

/*
fs.unlinkSync(`${dirPath}/courses.txt`);
*/

// asynchronous handler using promises

/*
let a = 10;
let b = 20;


let data = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(b = 100);
    },1000);
})

data.then((data_b)=>{
    b = data_b;
    console.log(a+b);
})
*/










// express js

// creating normal pages for web-browser using express
/*
const express = require("express")

// to make it executable we do the following next line code 
// therefore we have created an instance of our express application
const app = express();

app.get('', (req,res)=>{
    res.send("hello cristiano ronaldo!")
})

app.get('/about', (req,res)=>{
    res.send("hey this is your about page!")
})

app.get('/contact',(req,res)=>{
    res.send("this is our companies contact page!")
})

app.listen(5000);
*/


// rendering html and json

/*
const express = require ("express")
const app = express();

// rendering data in html format

app.get('',(req,res)=>{
    res.send(`<h1>Welcome jahanpanah!</h1> <a href ="/about">Go to about page</a>`)

})

app.get('/about',(req,res)=>{
    res.send(`<input type="text" placeholder="this is placeholder">
    <button>click me</button `)
})


// rendering data in json format

app.get('/json', (req,res)=>{
    res.send([{
        name: "anmol",
        email: "anmol@gmail.com"
    },
    {
        name: "ronaldo",
        email: "cr7@gmail.com"
    }]);
})
app.listen(4000)
*/

// loading html files with extension like      /about.html

/*
const express = require("express");
const path = require("path");
const app = express();

const mainPath = path.join(__dirname, "public");

app.use(express.static(mainPath));
app.listen(5000)
*/

// // remove extension and used ejs for creating dynamic pages and used profile.ejs file 

/*
const express= require("express")
const path = require("path")

const app = express();

const mainPath = path.join(__dirname, "public")

app.set('view engine','ejs');

app.get('', (req,res)=>{
    res.sendFile(`${mainPath}/index.html`);
});

app.get('/profile', (req,res)=>{
    const user = {
        name: "Anmol Upadhyay",
        city: "Kashipur",
        college: "Chandigarh University",
        skills: ['js','express js','react js']
    }
    res.render('profile',{user});
});

app.get('/login',(req,res)=>{
    res.render("login")
})

app.get('/about', (req,res)=>{
    res.sendFile(`${mainPath}/about.html`);
});

app.get('*',(req,res)=>{
    res.sendFile(`${mainPath}/notFound.html`);
});

app.listen(5000);
*/
