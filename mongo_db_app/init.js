const mongoose = require("mongoose");

const Chat=require("./models/chat.js");


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


let chats=[{
    from: "neha",
    to: "priya",
    msg: "send me your exam sheet",
    created_at: new Date().getTime(),
},
{
    from: "pragati",
    to: "bijeta",
    msg: "where are going to trip",
    created_at: new Date().getTime(),
},
{
    from: "shubham",
    to: "neha",
    msg: "I love you ......",
    created_at: new Date().getTime(),
},
{
    from: "shivani",
    to: "shardha",
    msg: "all the best !",
    created_at: new Date().getTime(),
},
{
    from: "rupesh",
    to: "rinku",
    msg: "tech me js callback",
    created_at: new Date().getTime(),
},];
Chat.insertMany(chats)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.error.Chat.properties);
});

