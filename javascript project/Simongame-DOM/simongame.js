let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","green", "purple"];
let level=0;
let started =false;
let h3=document.querySelector("h3");
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
}); 

function btnFLash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash")
    },250);
 } 
function levelUp(){
    level++;
    h3.innerText= `Level ${level}`;
    let randIdx= Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`)
console.log(randIdx);
console.log(randbtn);
console.log(randColor);
btnFLash(randbtn);
}
function btnPress(){
    console.log(this);
    let btn= this;
    btnFlash(btn);
}
let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

