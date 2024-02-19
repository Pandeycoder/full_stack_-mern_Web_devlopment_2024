const express = require('express')

const app = express();
//console.log(app);

let port=8000;


// -----------server start fucntion--------

 app.listen (port,()=>{
    console.log(`app is listning on port ${port}`);
 })



 // reequest send to server


//  app.use((req,res)=>{

//     console.log("request receive");

//     let cod="<html><body><h1>hello most welcome</h1></body></html>";

//     res.send(cod);
//  })


app.get("/",(req,res)=>{

	res.send({
	name:" i am root path",
	color:"red",
	});
	});

// app.get("/apple",(req,res)=>{

// 	res.send({
// 	name:"apple",
// 	color:"red",
// 	});
// 	});


//     app.get("/mango",(req,res)=>{

//         res.send({
//         name:"mango",
//         color:"red",
//         });
//         });


//         app.get("*",(req,res)=>{
//             res.send("this path doesnot exisit");
//         })


//         app.post("/",(req,res)=>{

//             res.send({
//             name:"pineapple",
//             color:"red",
//             });
//             });

app.get("/:username/:id",(req,res) => {

    let {username,id}=req.params;

    console.log(req.params);
    let htmF=`<h1>this account belong to @${username}</h1> `;

    res.send(htmF);
    
    }); 

    app.get("/search",(req,res) => {
        console.log(req.query);
    
        res.send("no result");
        });




