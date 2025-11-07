//access all the html code
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0; //to track draw

//this is the starting player (which is true)
let turno = true;

//these are the all winning patterns (hz,vt, diagonally)
const winPatterns = [[0,1,2],[0,3,6],[0,4,8],
[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

//this is the main function (at the time of playing)
boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        // console.log("buttonn was clicked");

        if(turno){  //player O
            box.innerText = "O";
            box.classList.add("o-style");   //add new class
            // to provide different color to x
            turno = false;
        }
        else{  //player X
            box.innerText = "X";
            box.classList.add("x-style");  //add new class
            // to provide different color to x
            
            turno = true;
        }
        box.disabled = true; //every box enables once at a time
        //  and then disabled
        count++;

        let isWinner = checkWinner();  //every time checks winner
        if(count === 9 && !isWinner){
            gameDraw();
        }
    });

});

//if we have a draw (all btns are clicked)
const gameDraw = () => {
    msg.innerText = `Game was a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

//reset game function
const resetGame = () => {
  turno = true;
  count = 0;
  enableBoxes();  //enables all empty boxes
  msgContainer.classList.add("hide");
}

//this is the function if winner is declared then game is stopped
//we could not continue playing
const disableBoxes = () => {
    for(let box of boxes){
         box.disabled = true;
    }
}

//this is applied when game is reset and new game starts
const enableBoxes = () => {
    for(let box of boxes){
         box.disabled = false;
         box.innerText = "";
    }
}

//this is the msg we are getting every time winning
const showWinner = (winner) => {
      msg.innerText = `Congratulations, winner is ${winner}`;
      msgContainer.classList.remove("hide");
      disableBoxes();  //immediately boxes diabled
    }

 //if hztlly or vtclly or diagonlly winner
 const checkWinner = () => {
      for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
      }
    }
 
    
    newGameBtn.addEventListener("click", resetGame);
    resetBtn.addEventListener("click", resetGame);