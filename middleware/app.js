const express=require("express");
const app=express();
const ExpressError=require("./ExpressError");


//  middleware  => response send

// app.use((req ,res,next)=>{
//     console.log("hi  i am 1st middleware");
//     next();
// });


// app.use((req ,res,next)=>{
//     console.log("hi  i am 2nd middleware");
//     next();
// })


// app.use((req,res,next)=>{

//     req.time= new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// });



app.use("/api",(req,res,next)=>{
    let {token}=req.query;

    if(token==="giveaccess")
    {
        next();
    }
    throw new ExpressError(401,"Access Denied");
});

app.get("/err",(req,res,next)=>{

    abcd=hbfff

});
app.use((err ,req,res,next)=>{
    console.log("--------Error----------");
    next(err);
})




app.get("/api",(req,res)=>{
    res.send("data");
});


app.get("/",(req,res)=>{

    res.send("hii i am root");
});

app.use("/random",(req,res)=>{

    res.send("this is radom page");
});



// //---------404 errors------
// app.use((req,res)=>{
//     res.status(404).send("Page not found !");
// })


app.listen("8082",()=>{
    console.log("server listing :8082")
});