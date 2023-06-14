






choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    //choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}




function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' || playerSelection == "Rock"){
        if (computerSelection == 'Rock'){
            return "Draw! Rock vs Rock";
        }
        else if (computerSelection == "Paper"){
            return "You lose! Paper beats Rock";
        }
        else if (computerSelection == "Scissors"){
            return "You win! Rock beats Scissors";
        }
    }
    else if (playerSelection == 'paper' || playerSelection == "Paper"){
        if (computerSelection == "Rock"){
            return "You win! Paper beats Rock";
        }
        else if (computerSelection == "Paper"){
            return "Draw! Paper vs Paper";
        }
        else if (computerSelection == "Scissors"){
            return "You lose! Scissors beat Paper"
        }
    }
    else if (playerSelection == "scissors" || playerSelection == "Scissors"){
        if (computerSelection == "Rock"){
            return "You lose! Rock beats Scissors"
        }
        else if (computerSelection == "Paper"){
            return "You win! Scissors beat Paper"
        }
        else if (computerSelection == "Scissors"){
            return "Draw! Scissors vs Scissors"
        }
    }
    else {return "Not a valid element"}
}



const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.textContent, getComputerChoice()));
    });
});


//const buttonQ = document.querySelector('#second');
//buttonQ.addEventListener('click', playRound("Paper", "Rock") );

/*

*/

/*
function game(){
    playerScore = 0;
    computerScore = 0;
    roundResult = '';
    for (let noRounds = 0; noRounds < 600; noRounds++){
        playerSelection = prompt()
        roundResult = playRound(playerSelection, getComputerChoice());
        console.log(roundResult);
        if(roundResult.includes("You win")){
            playerScore += 1;
        }
        else if (roundResult.includes("You lose")){
            computerScore += 1;
        }
        console.log("Score is " + playerScore + ":" + computerScore)
        if(playerScore == 3){
            return("Player wins!");
        }
        else if(computerScore == 3){
            return("AI wins!");
        }
        else if (noRounds ==5 && playerScore < 3 && computerScore < 3){
            console.log("Game over.")
        }
    }
}
//console.log(game());



buttonactivate();

*/