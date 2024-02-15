let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

document.addEventListener("keypress",function(){
  
        if(started==false)
        {
        console.log("game is started...");
        started=true;

        levelUp();
        }
    
});

function levelUp{
        level++;
        
}
