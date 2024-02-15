let btn = document.querySelector("button");
console.dir(btn);

//btn.onclick=function(){
//console.log("button was clicked");
//  alert("hiii ...sorry");
//};


let btns = document.querySelectorAll("button");

for (btn of btns) {
    //btn.onmouseenter=function(){
    //  console.log("you entered a button");
    //}

    //btn.onclick=sayHello;
    //btn.addEventListener("click", sayHello);
    //btn.addEventListener("click", sayrahul);

    btn.addEventListener("dblclick", function(){
        console.log("double clicked");
    });


}

function sayHello() {
    alert("hello");
}
function sayrahul() {
    alert("Rahul IT");
}

//btn.onclick=sayHello;
//btn.onclick=sayrahul;







