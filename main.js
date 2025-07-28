// Step 1: Logic to get random choice

function getComputerChoice(){
    let choices = ["rock", "paper", "scissor"]
    let randomIndex = Math.floor(Math.random() * choices.length)
    return(choices[randomIndex])
}

let computerChoice = getComputerChoice(); //store the random Computer choice into computerChoice variable


// Step 2: Get human choice
let humanChoice = prompt("Enter your choice:") // Gets the player choice




// Step 3: Play single round

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(
        humanChoice === "scissor" && computerChoice === "paper" || 
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "rock" && computerChoice === "scissor"
    ){
        humanScore++;
        console.log(`Congratulation!! You Won!! ${humanChoice} beats ${computerChoice}`);
    }
    else if(humanChoice === computerChoice){
        console.log("It's a tie!");
    }
    else{
        computerScore++;
        console.log(`Better luck next time <3. ${computerChoice} beats ${humanChoice}`);
    }
    console.log(`Your score is ${humanScore}`);
    console.log(`Computer score is ${computerScore}`);
}

playRound(humanChoice, computerChoice);

