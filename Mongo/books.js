const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1.27017/future");

main()
    .then((res) => {
        console.log("connection success");

    })
    .catch((err) => console.log("it is not connect"));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/amazon");
}

const bookSchema=new mongoose.Schema({

    title:{
        type : String,
        required:true,
        maxLength:20,
        minLength:6,
    },

    aouthor:{
        type : String,

    },
    price:{
        type : Number,
        min:[10, "price is low for amazon selling"],
    },
    discount:{
        type:Number,
        default:0,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    category:{
        type:String,
        enum: ["physics","math"],
    },

   
});



const Book=mongoose.model("Book",bookSchema);


Book.findByIdAndUpdate("65d7d1addae66f9bec01eb38",{price:5}, {runValidators : true})
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err.errors.price.properties.message);
    
    });

// let book1=new Book({

//     title:"chemistry IX",
//     aouthor:"NCERT",
//     price: 200,
//     category:"math",
    
// });


// book1
// .save()
// .then((res)=>{
//     console.log(res);
// })

// .catch((err)=>{
//     console.log(err);

// });
