const {faker}= require('@faker-js/faker');
const mysql=require("mysql2");

const express=require("express");
const app=express();
const path=require("path");

const methodoverride=require("method-override");
const { encode } = require('punycode');
app.use(methodoverride("_method"));

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"/views"));


const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'future_app',
    password:'coder',
});



let  createRandomUser= () =>  {
    return [ 
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ];
    };



let q="insert into user (id ,name,password,email) values ?";

// let user=[
//     ["12","123_mes2","pandeycoder@gamail.com","abc2"],
//     ["1234","123_msc","pandeycoder@gail.comc","abc3"] 
// ];


// let data=[];
// for(let i=1;i<=100;i++)
// {
//     //console.log(createRandomUser());


//     data.push(createRandomUser());
// }



// try{


//     connection.query(q,[data],(err,result)=>{
    
//         if(err) throw err;
    
//     });
// }
// catch(err)
// {
//     console.log(err);
// }
// connection.end();


//---------Home route....................

app.get("/",(req,res)=>{
    let q='select count(*) from user';

    try{
    connection.query(q,(err,result)=>{
    
        if(err) throw err;
        console.log(result[0]["count(*)"]);
        let count=result[0]["count(*)"];

        res.render("home.ejs",{count});
    
    });
}catch(err)
{
    console.log(err);
    res.send("some error in database");
}

});
//----------------home route end........




//---------------------------user-----------------------------

app.get("/user",(req,res)=>{

    let q='select * from user';

    try{
    connection.query(q,(err,users)=>{
    
        if(err) throw err;
        res.render("showusers.ejs",{users});
    
    });
}catch(err)
{
    console.log(err);
    res.send("some error in database");
}

});


//---------- edit user....................

app.get("/user/:id/edit",(req,res)=>
{
    let {id}=req.params;
    
    let q=`select * from user where id='${id}'`;


    try{
        connection.query(q,(err,users)=>{
        
            if(err) throw err;
            let user=users[0];
            console.log(users);
            res.render("edit.ejs",{user});
        
        });
    }catch(err)
    {
        console.log(err);
        res.send("some error in database");
    }
    
    });

// ----------------- update route..........

app.patch("/user/:id",(req,res)=>
{

 let {id}=req.params;

 let {email:formPass, name:newName}=req.body;

 let q=`select * from user where id='${id}'`;
    
    try{
        connection.query(q,(err,users)=>{
        
            if(err) throw err;
            let user=users[0];
             
            if(formPass != user.email)
            {
                res.send("wrong password");
            }
            else{

                let q2=`update user set name='${newName}' where id='${id}'`;
                connection.query(q2,(err,result)=>{
                    if(err) throw err;
                    res.send(result);
                });

            }
            
            console.log(users);
            res.send(user);
    }); 
   }


     catch(err)
    {
        console.log(err);
        res.send("some error in database");
    }
   
});










app.listen("8083",()=>{

    console.log("server is listening : 8083 ");
})

  
