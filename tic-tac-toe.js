let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const reset_game=()=>{
boxes.forEach((box)=>{
    turnO=true;
    box.innerText="";
    box.disabled=false;})
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if(turnO){
        box.innerText="O";
        turnO=false;
        
    }
    else{
        box.innerText="X";
        turnO=true;
    }box.disabled=true;
    check_winner();
});
});

resetBtn.addEventListener("click",()=>{
 reset_game();
    });

const show_winner=()=>{
    msg.innerText='${pos1val} Jeet gaya hai';
    msgContainer.classList.remove("hide");
}

newGameBtn.addEventListener("click",()=>{
    reset_game();}
)
const check_winner=()=>{
    for(let pattern of winPatterns){
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;
if(pos1val!=""&&pos2val!=""&&pos3val!=""){
    if(pos1val===pos2val&&pos1val===pos3val){
      const winner=pos1val;
           console.log("winner");
           show_winner();

        }
        }
    }
}
