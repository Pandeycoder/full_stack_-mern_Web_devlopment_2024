const express=require("express");
const app=express();
const port=8086;
const path=require("path");


const {v4:uuidv4}=require('uuid'); //it create unique id 



app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(path.join(__dirname,"/images")));  //...........................image url .............
app.set("views",path.join(__dirname,"/views"));


//---------------------------------------------->image upload..............................

const multer=require("multer");
const storage=multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,"images");
    },
    filename:(req,file,cb)=>{
        console.log(file);
        cb(null,Date.now()+path.extname(file.originalname))
    }
})


const upload=multer({storage:storage});

//----------------------------------------------------->image upload.....................





let blogs=[
    {
        id:uuidv4(),
        content:"A Culinary Embrace of Warmth and Well-being",
        title:"To 50 - Global",
        info:"Your daily updates of the most played ..",
        image:"/images/card3img.jpeg"
    },
    {
        id:uuidv4(),
        content:"i am going to suffering from fever.",
        title:"To Health",
        info:"Your daily updates of the most played ..",
        image:"/images/card2img.jpeg"
    } 
];



app.get("/blogs",(req,res)=>{
  
    res.render("foodblog.ejs",{blogs});
});

app.get("/blogs/new",(req,res)=>{ //here information comming through query

    res.render("new.ejs");
})

app.post("/blogs",upload.single("image"),(req,res)=>{ //here information comming through body

    
    let {content,title,info}=req.body;

    let id=uuidv4();
    
    let image = req.file.filename;

    blogs.push({id,content,title,info,image});

    console.log(req.body);
    
    res.redirect("/blogs");

});


app.get("/blogs/:id",(req,res)=>{

    let {id}=req.params;
    let blog=blogs.find((b) => id==b.id);

    console.log(blog);
    res.render("blogshow.ejs",{blog});

})


















app.listen(port,()=>{
    console.log("server listening port :",{port});
})