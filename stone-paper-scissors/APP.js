let userScore = 0;
let compuScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compuScorePara = document.querySelector("#compu-score");

//randomly generated ccomputer's choice
const genCompuChoice = () => {
    const options = ["rock", "paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
//draw game
const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "game was draw. Play again!"
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const showWinner = (userWin , userChoice, compuChoice) => {
if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `you win! your ${userChoice} beats ${compuChoice}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
 }
 else{
    compuScore++;
    compuScorePara.innerText = compuScore;
    msg.innerText = `you lose! ${compuChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
 }
}

//when we get both players choices 
const playGame = (userChoice) => {
    console.log("userChoice is = ", userChoice);
    
    const compuChoice = genCompuChoice();
    console.log("compuChoice is = ", compuChoice);
    
    //when game darw
    if(userChoice === compuChoice){
        drawGame();
    }
    //after draw we have two choices left
    else{
        let userWin = true;
        if(userChoice === "rock"){  //compuChoice automa. paper or scissors ho jayegi
         userWin = compuChoice === "paper" ? false : true;  
        }
        else if(userChoice === "paper"){  //compuChoice automa. rock or scissors ho jayegi
          userWin = compuChoice === "scissors" ? false : true; 
        }
        else{ //compuChoice automa. rock or paper ho jayegi
        userWin = compuChoice === "rock" ? false : true; 
        }
        showWinner(userWin, userChoice, compuChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
     const userChoice = choice.getAttribute("id");
     //user's choice
     console.log("choice was clicked" , userChoice);
     playGame(userChoice);
    });
});