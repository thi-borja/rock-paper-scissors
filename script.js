function getComputerChoice(){
    const myList = ["ROCK", "PAPER", "SCISSOR"];
    return myList[Math.floor(Math.random() * myList.length)];
}

function getPlayerSelection(){
    return prompt("Select rock, paper or scissors").toUpperCase();
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    if ((playerSelection == "ROCK" && computerSelection == "ROCK") || (playerSelection == "PAPER" && computerSelection == "PAPER") || (playerSelection == "SCISSORS" && computerSelection == "SCISSORS")){
        result = "Tie!"
    } else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") || (playerSelection == "SCISSORS" && computerSelection == "PAPER") || (playerSelection == "PAPER" && computerSelection == "ROCK")){
        result = `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`
    }

    return result;
}

function playGame(){
    console.log(playRound(getPlayerSelection(),getComputerChoice()));
    console.log(playRound(getPlayerSelection(),getComputerChoice()));
    console.log(playRound(getPlayerSelection(),getComputerChoice()));
    console.log(playRound(getPlayerSelection(),getComputerChoice()));
    console.log(playRound(getPlayerSelection(),getComputerChoice()));
}