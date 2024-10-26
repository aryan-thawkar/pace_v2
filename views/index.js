const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const { type } = require("os");

mongoose.connect("mongodb://localhost:27017").then(()=>
{
   console.log("successfully connected");
}).catch((error)=>
{
  console.log(error)
})
const userschema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    result:{
        type:Number,
        default:0
    }
})
module.exports = mongoose.model('User', userschema);
const user=mongoose.model("user",userschema);

app.set("view engine","ejs");
app.set("views",path.resolve('views'))
app.use(express.urlencoded({extended:false}));
app.use(express.static('views'));
app.get("/",(req,res)=>
{
   res.render("login")
})
app.get("/signup",(req,res)=>
   {
      res.render("signup")
   })

app.post("/signup", async(req,res)=>
{const exist=await user.findOne({username:req.body.username});
const t=1;
if(exist)
{  
  res.send("Account exist !");
}

else{
   const result=await user.create({
      username:req.body.username,
      email:req.body.email,
      password:req.body.password
   })
   console.log(result);
   return res.render("login");
}
 
})
app.get("/result",(req,res) => 
{
    res.render("result")
} )

app.post("result")

app.post("/login",async(req,res)=>
{
   try{
      const check=await user.findOne({username:req.body.username})
      if(check.password===req.body.password)
      {
         return res.render("home");
      }
      else{
         console.log("invalid");
      }
   }
   catch{
  console.log("in");
   }

})
app.listen(3000,()=>
{
   console.log("server connected");
})

app.get('/quiz', (req, res) => {
   res.render('quiz'); 
});

app.get('/bot', (req, res) => {
   res.render('bot'); 
});

app.get('/ocean', (req, res) => {
   res.render('ocean'); 
});

app.get('/aer', (req, res) => {
   res.render('aer'); 
});

app.get('/cloud', (req, res) => {
   res.render('cloud'); 
});

app.get('/ph', (req, res) => {
   res.render('ph'); 
});

app.get('/globe', (req, res) => {
   res.render('globe'); 
});