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
};


const userSchema=new Schema({
    username:String,

    email:String,

})

const postSchema=new Schema({

    content:String,
    likes:Number,

    User: {
        type: Schema.Types.ObjectId,
        ref:"User",
    }
});


const User=mongoose.model("User",userSchema);
const Post=mongoose.model("Post",postSchema);

const addData = async () =>{
 
    // let user1=new User({

    //     username:"pandeycoder",

    //     email:"pandeycoder8474@gmail.com",


    // });

    let user=await User.findOne({username:"pandeycoder"});


    let post2=new Post({
        content: "if you don't mind can i get your number",
        likes:20,
    });

    post2.User=user;

    // await user.save();

    await post2.save();

};

addData();
































