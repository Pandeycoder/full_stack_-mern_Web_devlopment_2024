//console.log("hello world");
//console.log("Rahul IT");
//console.log("hello world");
/*let a=10;
let b=20;
console.log("sum is : ",(a+b));
let pecilPrice=10;
let eraser=5;
let output1="The price is "+(pecilPrice+eraser)+ " Rupess .";

let output=`The total price is : ${eraser+pecilPrice} Rupess`;  //back ticks

console.log(output1);*/
//console.log("the total price is :",(a+b)," Rupess");



//Print console alert prompt

/*alert("this is simple alert");


console.log("this is simple log");
console.error("this is simple error message");
console.warn("this is warning message");
console.info("this is info message");
console.debug("this is debug message");
console.trace("this is simple trace message");


let first=prompt("enter your name");

console.log(first);*/


//let a="  hello  so   me     ";
//a.trim();

//let ps=prompt("set your password");
//let newps=ps.trim();
//console.log(newps);

/*let student=["suman","rahul","punam","neha"];
console.log(student);

let number=[2,3,4,5,6,8];
console.log(number[2]);
console.log(typeof(number));

let cars=["audi","maruti","xuv"];
cars.push("toyota");

console.log(cars);

cars.pop();
console.log(cars);


cars.unshift("toyota");

console.log(cars);

cars.shift();
console.log(cars);




let follower=["a","b","c","d"];
let block=follower.shift();

console.log(follower);

console.log(block);  */


//--------------------------Loop


/*for(let i=1;i<=15;i++)
{
    if(i%2==0)
    console.log(i);
}

function hello()
{
    console.log("hello");
}

hello();

let rand=Math.floor(Math.random()*6)+1;

console.log(rand);

function sum(a,b)
{
    return a+b ;
}
sum(sum(1,2),4);
console.log(sum(sum(1,2),4));



   //laxical Funci=tion

function OutFun()
{

    function innerFun()
    {
        console.log(x+y);
    }
    
    let x=10;
    let y=30;


    innerFun()
}

OutFun();


function multi(fun ,count)
{
    for(let i=1;i<=count;i++)
    {
        fun();

    }

}
let greet=function(){
    console.log("hello");
}
multi(greet ,2);





function oddEvenFactory(request)
{
    if(request=="odd")
    {
        let odd = function(n){

            console.log(!(n%2==0));
        }
        return odd;
        
    }
    else if(request=="even")
    {
        let even = function(n){

            console.log((n%2==0));
        }
        return even;

    }
    else{

    }
}

let request ="odd"; //odd
let func1=oddEvenFactory(request);
console.log(func1.odd);


//////////////////////calculator ...................


const calculator={

  

    add(a,b)
    {
        return a+b;
    },
    sub(a,b)
    {
        return a-b;
    },
    multi(a,b)
    {
        return a*b;
    }
}

console.log(calculator);

console.log(calculator.num);

console.log(calculator.add(5,6));

console.log(calculator.sub(5,6));

console.log(calculator.multi(5,6));



const student={
    name:"Rahul IT",
    age:23,
    eng:93,
    math:87,
    phy:97,
    getAvg()
    {
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got avg mark ${avg}`);
    }

}
console.log(student);
console.log(student.getAvg());


try{
    console.log("hello")
    console.log(a);
}
catch
{
    console.log("not defiend");
}


//Arrow function .......................


const sum1=(a,b) => {
    console.log(a+b);
  };
sum1(4,5);

const mul1 = (a,b) =>( 
    a*b
  );

  let x1=mul1(5,4);
console.log(x1);


/////////////time out session 


console.log("jiii welcome ...");

setTimeout ( ()=> {
    console.log("Rahul IT");
   },4000);
   
console.log("welocme to");
   

let id=setInterval ( ()=> {
 console.log("Rahul IT.........interval");
},2000);

console.log(id);

clearInterval(id);




let num=[1,2,3,4]
 
let double=num.map ( (el)=>{
return el*2;
});*/


/*unction sum (a,b=2){
    return a+b;
    }
let ans=sum(2);
console.log(ans); 


 ///            spread ......................

console.log(..."Rahul IT");



let arr=[2,3,4,5,6,6,7,89,8,0];

console.log(Math.min(...arr));

let odd=[1,2,3,5,7,9];
let even =[4,6,8,120];
let newArr=[...odd,...even];
console.log(newArr);





let data={
    email: "pandeycoder8474@gmail.com",
    password: "abcd",
    };
    
let dataCopy={...data, id:123};

console.log(dataCopy.email);
    
const student1={
    name:"rahul",
    age:29,
    class:9,
    subject:["hindi","english","math","science"],
    username:"pandeycoder",
    password:"abcd"
};

 let username1=student1.username;
 console.log(username1);
 let password1=student1.password;
console.log(password1);


let {username:user,password:sceret}=student1;
console.log(user);*/




//-----------------------DOM--------------------


/*console.dir(document.querySelector("h1"));

console.dir(document.querySelector(".name"));

console.dir(document.querySelectorAll("div"));

let img=document.querySelector('img');
console.log(img);

let link=document.querySelectorAll("")*/


/*let para1=document.createElement("p");

para1.innerText="Hey i am red ! ";

document.querySelector("body").append(para1);

para1.classList.add("red");




let h3=document.createElement("h3");

h3.innerText="Hey i am blue h3 ! ";

document.querySelector("body").append(h3);

h3.classList.add("blue");


let div=document.createElement("div");
let h2=document.createElement("h2");
let para2=document.createElement("p");

h2.innerText="i am in a div";

para2.innerText="me too";

div.append(h2);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);

*/


/*setTimeout(()=>{
    alert("Rahul IT");
},2000);

setInterval(()=> {
    alert("coder")
},3000);*/


/*h1=document.querySelector("h1");

function changeColor(color,delay ,nextColorChange){
    setTimeout(() => {
        h1.style.color=color;
        
        if(nextColorChange)
        nextColorChange();
    
    }, delay);
}


changeColor("red",1000,()=>{
    changeColor("green",1000,()=>{
        changeColor("orange",1000,()=>{
            changeColor("yellow",1000,()=>{
                changeColor("pink",1000);

            });

        });
    });
})
*/
// callback hell 

/*function savetoDb(data){

    let internetSpeed=Math.floor(Math.random()*10)+1;

    if(internetSpeed>4)
    console.log("your data was savead :",data);

    else
    console.log("weak connection data not saved");


 
    console.log("your data was saved");
}*/

// async function greet() {
//    // throw "some random error";
//     return "hello world"; //return a promise
// }
// let hello = async () => { };


// greet()
// .then(()=>{
//     console.log("promise was resolved");
//     console.log("result was :",result);

// })

// .catch((err)=>
// {
//     console.log("promise was rejected with err :",err);
// });



// function getNum()
// {
//     return new Promise((resolve ,reject )=>
//     {
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
        
//             console.log(num);
//             resolve();
//         } ,1000);
//     });

// }
// async function demo()
// {
//     await getNum();
//     await getNum();
//     await getNum();
// }


//................................................................json.........................................................



// let jsonRes='{"fact":"A sexually-active feral hii mrs","length":145}';

// let valiRes=JSON.parse(jsonRes);
// console.log(valiRes);
// console.log(valiRes.fact);


// let student={
//     "name":"rahul",
//     "course":"mca",
    
// }


// fetch(url)                      //request  1
// .then((Response)=>{
//     console.log(Response);
//     return  Response.json();
// })

// .then((data)=>{
//    console.log(data.fact);

//    return fetch(url);            //request 2
// })

// .then((res)=>{
//     return res.json();                    
// })

// .then((data1)=>{
//     console.log(data1.fact);
// })

// .catch((err)=>{
//     console.log(err);
// });


// async function getFacts()
// {
//     try{
//         let res=await fetch(url);
//     let data=await res.json();
//     console.log(data);

//     }catch(err)
//     {
//         console.log(err);

//     }
    
// }

//---------------------------------------------- axios api using ........................................................................


// let btn=document.querySelector(".para");

// btn.addEventListener("click",async () => {
//     console.log("button was clicked");
    
//     let fact=await getFacts();  //call 
//     console.log(fact);

//     let p=document.querySelector("p");
//     p.innerText=fact;


// })

// let url="https://catfact.ninja/fact";
// async function getFacts()
//  {
//      try{
//          let res=await axios.get(url);
//          return res.data.fact;

//      }catch(err)
//      {
//          //console.log(err);
//          return "not fact found !"
//      }
// }


// let btn1=document.querySelector(".img1");
// let url2="https://dog.ceo/api/breeds/image/random";



// btn1.addEventListener("click",async()=>{

//     let data1=await getFacts1();

//     let img=document.querySelector("#result");
//     img.setAttribute("src",data1);
    
// });


// async function getFacts1(){
//     try{
//         let res1=await axios.get(url2);
//         return res1.data.message;

//     }catch(e)
//     {
//         return "not available fact image api";
//     }
// }



const url="https://icanhazdadjoke.com/"

async function getJokes(){
    try{
        const config={headers:{Accept:"application/json"}};

        let rs=await axios.get(url,config);

        console.log(rs.data);

    }catch(e)
    {
        console.log(e);

    }
    
}












