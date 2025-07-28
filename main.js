// Step 1: Logic to get random choice

function getComputerChoice(){
    let choices = ["rock", "paper", "scissor"]
    let randomIndex = Math.floor(Math.random() * choices.length)
    return(choices[randomIndex])
}

let computerChoice = getComputerChoice(); //store the random Computer choice into computerChoice variable


// Step 2: Get human choice

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice:")
     if(
        humanChoice === "scissor" && computerChoice === "paper" || 
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "rock" && computerChoice === "scissor"
     ){
        console.log("Congratulation!! You Won!!")
     }else{
        console.log("Better luck next time <3");
        
     }
}

getHumanChoice();