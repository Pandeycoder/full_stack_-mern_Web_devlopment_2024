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











const ordeSchema=new Schema({

    items:String,
    price:Number,

});

const customerSchema=new Schema({

    name:String,
    orders:[
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        }
    ]
});


// customerSchema.pre("findOneAndDelete",async()=>{
//     console.log("Pre middleware");
// });

customerSchema.post("findOneAndDelete", async(customer)=>{
    
    if(customer.orders.length)
    {
        let result=await Order.deleteMany({_id :{ $in : customer.orders}});
       
        console.log(result);
    }

});


const Order=mongoose.model("Order",ordeSchema);

const Customer=mongoose.model("Customer", customerSchema);


//function 

const findCustomer= async ()=>{

        
     let result=  await Customer.find({}).populate("orders");    
     console.log(result[1]);
    };






const addCustomer= async ()=>{

    let newCust=new Customer({
        name: "pragati priya",
    });

    let newOrder=new Order({

        items:"burger",
        price:40,
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("new add customer");

};

const delCust=async () =>{

    let data=await Customer.findByIdAndDelete("65dccec984fa3932f85c8c61");

    console.log(data);
};

//addCustomer();

delCust();













//     let order1= await Order.findOne({items: "Pizza"});
//     let order2= await Order.findOne({items: "Burger"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);


//  let res=  await cust1.save();

//  console.log(res);
// };

// addCustomer();

// const addOrder= async ()=>{

//     let res=await Order.insertMany([
//       {
//           items:"Pizza" , price:100},

//         {  items:"Burger" , price:40},

//         {  items:"paneerwrap" , price:100},
//       ]);

//     console.log(res);
// }

// addOrder();
