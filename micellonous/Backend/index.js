const express=require("express");
const app=express();

const port=8083;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//------------------------get----------------------------

app.get("/register",(req,res)=>{  //data wiill comming through query string

    let {user,password}=req.query;

    console.log("get accepted");
    res.send(`standard get respnose : Welcome  ${user},${password}`);

})


//---------------post-----------------------------

app.post("/register",(req,res)=>{ // but post request data will not comming through query 
    
    let {user,password}=req.body;
    console.log("post accepted");
    res.send(`standard Post respnose : welcome ${user}`);
})










app.listen(port,()=>{

    console.log("listing to port :",port);
});



