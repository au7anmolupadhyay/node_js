module.exports = reqFilter = (req,res,next)=>{
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