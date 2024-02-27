const mongoose=require("mongoose");
const{Schema}=mongoose;


main()
    .then((res) => {
        console.log("connection success");

    })
    .catch((err) => 
    console.log("it is not connect")
    );

async function main() {
    await mongoose.connect("mongodb://localhost:27017/relation");
}

const userSchema=new Schema({

    username:String,
    addresses: [
        {
            _id:false,
            location:String,
            city:String,
        },

    ],

});

const User=mongoose.model("User",userSchema);

const addUsers= async()=>{
    let user1=new User({
        username: "Sonu pandey",

        addresses: [{
           
            location: "22B Near jwala mukhi mandir",
            city: "Darbhanga",
        }]

    })
    user1.addresses.push({ location:"p32 waliStreet",city:"darbhanga"});

   let result= await user1.save();
   console.log(result);
};

addUsers();
