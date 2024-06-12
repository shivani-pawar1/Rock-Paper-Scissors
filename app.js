let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const button = document.querySelector("button");

const genComChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const drowGame = () => {
         console.log("game is Draw");
         msg.innerText = "Game was Draw, Play again.";
         msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) =>{
     if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
     }
     else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose");
        msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`; 
        msg.style.backgroundColor = "red";
    }

}
const playGame = (userChoice) =>{
    console.log("User Choice ", userChoice);
    const compChoice = genComChoice(); 
    console.log("Computer Choice ", compChoice );

    if (userChoice === compChoice){
      drowGame();
    } 
    else {
        let userWin = "true";
        if(userChoice === "Rock"){
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "Paper"){
            userWin = compChoice === "Scissors"? false : true;
        }
        else{
            userWin = compChoice === "Rock"? false : true;
        }
        showWinner(userWin , userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

button.addEventListener("click", () =>{
    userScore = 0;
    compScore = 0;
    userScorePara.textContent = 0;
    compScorePara.textContent = 0;
    msg.innerText =  "Play your Move.";
    msg.style.backgroundColor = "#081b31";
})