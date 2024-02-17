const express=require("express"); //it is pacckage
const app=express();

const path=require("path");



const port=8082;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


app.get("/",(req,res)=>{

	res.render("home.ejs");
});


app.get("/rolldice",(req,res)=>{

    let diceVal=Math.floor(Math.random()*6)+1;

	res.render("rolldice.ejs",{num:diceVal});
});






app.get("/hello",(req,res)=>{

	res.send("welcome to hello");
});



app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})