let btn = document.querySelector("button");


btn.addEventListener("click", function () {

    let h3=document.querySelector("h3");
    let randomColor=getRandomColor();

    h3.innerText=randomColor;

    let div=document.querySelector("div"); 

    div.style.backgroundColor = randomColor;
    console.log("update color");
});


function getRandomColor() {

    let red=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`

    return color;

}

//---------------form-------------------- 

/*let form=document.querySelector("form");

/*form.addEventListener("submit",function(){

    console.log("submitted form");
    alert("summitted");
});*/

/*form.addEventListener("submit",function(event){

    event.preventDefault();

    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");

    console.log("username : ",user.value);
    console.log("password : ",pass.value);
  


   alert(`Hii ${user.value},your passwrod is set to ${pass.value}`);
});*/





let form=document.querySelector("form");
form.addEventListener("submit",function(event){

    event.preventDefault();
});



let user=document.querySelector("#user");

user.addEventListener("change",function(event){
    console.log("input changed");
    console.log("final value ",user.value);

});


// ..............Text Editor .....................................

let inp=document.querySelector("#user");
let p=document.querySelector("p");

inp.addEventListener("input",function(){
    console.log(inp.value);

    p.innerText=inp.value;


});
