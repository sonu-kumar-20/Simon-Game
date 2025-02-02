let gameSeq = [];
let userSeq = [];


let  btns = ["yellow","red","purple","green"];


let started  = false;
let level = 0;

let h5 = document.querySelector("h5");


document.addEventListener("keypress",function(){
  if(started == false){
   
    started = true;
    levelUp();
  }
  
});
function gameFlash(btn){
  btn.classList.add("gameFlash");
  setTimeout(function() {
    btn.classList.remove("gameFlash");
  },300);
}

function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(function() {
    btn.classList.remove("userflash");
  },300);
}

function levelUp(){
  userSeq = [];
  console.log("level up ho gyia")
  level++;
  h5.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];

  let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx){
  //console.log("curr level : ",level)
  // ;

 
  if(userSeq[idx] === gameSeq[idx]){
   if(userSeq.length == gameSeq.length){
    setTimeout(levelUp,1000);
    
   }
  }else{
    h5.innerHTML = `Game Over Your score is <b> ${level} </b>. <br>press any Key to start game`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function() {
      document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
  }
}

function btnPress(){
  let btn = this;
  userflash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");


for(btn of allBtns){
  btn.addEventListener("click",btnPress);
}

function reset(){
  started = false;
  userSeq = [];
  gameSeq = [];
  level = 0;
}