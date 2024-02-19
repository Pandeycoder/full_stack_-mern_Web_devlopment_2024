const express=require("express");
const app=express();
const port=8084;
const path=require("path");

const {v4:uuidv4}=require('uuid'); //it create unique id 

const methodOverride=require("method-override")


app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));

app.use(methodOverride('_method'));

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"/public")));
app.set("views",path.join(__dirname,"/views"));


//

let posts=[
    {
        id:uuidv4(),
        username:"Rahul IT",
        content : "I Love coding"
    },
    {
        id:uuidv4(),
        username:"Shubham Rathour",
        content : "Life is all about learning"
    },
    {
        id:uuidv4(),
        username:"Rupesh Kumar",
        content : "Harwork is only sucess of key "
    },];


app.get("/posts",(req, res)=>{
    console.log("request accepted");

    res.render("index.ejs",{posts});
})

//it can take data................

app.get("/posts/new",(req, res)=>{
    //let {username,content}=

    res.render("new.ejs");
})


// it can show the data.................

app.post("/posts",(req, res)=>{  //create the post

    let {username,content}=req.body;

    let id=uuidv4();

    posts.push({id,username,content});

    console.log(req.body);

    res.redirect("/posts");
});





app.get("/posts/:id",(req, res)=>{
    let {id} =req.params;

    let post=posts.find((p) => id==p.id );

    console.log(post);

    res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{

    let {id}=req.params;
    console.log(id);

    let  newContent=req.body.content;

    let post=posts.find((p) => id == p.id );

    
    console.log(post);
    
    post.content=newContent;


    res.redirect("/posts");

});


app.get("/posts/:id/edit",(req,res)=>{

    
    let {id}=req.params;
    let post=posts.find((p) => id == p.id );
    

    res.render("edit.ejs",{post});
});

app.delete("/posts/:id",(req,res)=>{

    let {id}=req.params;
     posts=posts.filter((p) => id !== p.id );

    res.redirect("/posts");
})




app.listen(port,(req,res)=>{
    console.log("my server that port number : ",port);
})