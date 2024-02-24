const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1.27017/future");

main()
    .then((res) => {
        console.log("connection success");

    })
    .catch((err) => console.log("it is not connect"));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/future");

}


//.................create schema..........................


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

// --------------Models-----------------collections--------------

const User=mongoose.model("User",userSchema);

// const Employee = mongoose.model("Employee", userSchema);

// const User3 = new User({
//     name: "Pragati",
//     email: "pragati8474@gmail.com",
//     age: 23,
// });

// // const User2 = new User({
// //     name: "coder",
// //     email: "pandey8474@gmail.com",
// //     age: 42,
// // });


// User3.save()
// .then((res) =>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


// User.insertMany([
//     { name:"tony", email: "tony@gmail.com", age:24},
//     { name:"Rupseh", email: "rupesh@gmail.com", age:22},
//     { name:"Roman", email: "roman@gmail.com", age:21},
//     { name:"john", email: "john@gmail.com", age:20},
// ])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

// User.findById({_id: "65d7b24fb64f135a63ab663d"}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


User.updateOne({name:"john"}, {age:101})
.then((res)=>{
    console.log(res);
})
.catch((err)=>
{
    console.log(err);
});


// User.deleteOne({name:"coder"})
// .then((res)=>{
// console.log(res)})
// .catch((err)=>{
// console.log(err);
// })


// User.deleteMany({age:{$gt:40}})
// 	.then((res)=>{
// 	console.log(res)})
// 	.catch((err)=>{
// 	console.log(err);
// 	});


User.findByIdAndDelete({_id:"65d7b3c1a601ada390552281"})
	.then((res)=>{
	console.log(res)})
	.catch((err)=>{
	console.log(err);
	});