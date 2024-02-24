const express = require("express");
const app = express();
const path=require("path");
const mongoose = require("mongoose");

const Chat=require("./models/chat.js");
const { execPath } = require("process");


app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));



main()
    .then((res) => {
        console.log("connection success");

    })
    .catch((err) => 
    console.log("it is not connect")
    );

async function main() {
    await mongoose.connect("mongodb://localhost:27017/whatsapp");
}



let chat1=new Chat({
    from: "neha",
    to: "priya",
    msg: "send me your exam sheet",
    created_at: new Date().getTime(),

})
chat1.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.error.Chat.properties);
});



// index route...................


app.get("/chats", async(req, res) => {

    let chats= await Chat.find();
    
    res.render("index.ejs",{chats});
});

















app.listen(8086, () => {
    console.log("listening server port :8086");
})

