const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use("/public",express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

const cors = require("cors")
let USERS = []

app.use(cors({
    exposedHeaders:["Content-Type","x-auth-token"],
    allowedHeaders:["Content-Type","x-auth-token"]
}))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
  
    next();
  });
const jwt = require("jsonwebtoken")
const SECRET_KEY = "javascript"



app.get("/",(req,res)=>{
    res.send("Hello World")
})


app.post("/signup",(req,res)=>{
    
    let new_user = req.body;
    new_user.token = jwt.sign(new_user,SECRET_KEY)
    console.log(new_user);
    USERS.push(new_user)
    res.status(200).send("SUCCESS")
})

app.post("/signin",(req,res)=>{

   
    let result = USERS.find((user)=>{
       return user.email === req.body.email
    })

    console.log(result)

    if(result){
       if(result.password === req.body.password){
        res.setHeader("x-auth-token",result.token)
        res.status(200).send("SUCCESS")
       }

       else {
        res.status(400).send("PASSWORD FAILED")
       }
    }

    else {
        res.status(400).send("FAILED")
    }
})


const middleware_token = (req,res,next)=>{
    let token = req.headers["x-auth-token"]
    console.log(token)

    try {
        if(token){

            if(jwt.verify(token,SECRET_KEY)){
                next()
            }
     
            else {
                res.status(400).send("TOKEN FAILED")
            }
         }
     
         else {
             res.status(400).send("NO TOKEN")
         }
    } catch (error) {
        res.status(400).send("TOKEN IS PROBLEMATIC")
    }
   
}

app.post("/protected",middleware_token,(req,res)=>{
    res.status(200).send("ACCESSED SECURE ROUTE")
})




app.listen(3500,()=>{
    console.log("Node Listening on 3500")
})