// Step 1: Logic to get random choice

function getComputerChoice(){
    let choices = ["rock", "paper", "scissor"]
    let randomIndex = Math.floor(Math.random() * choices.length)
    return(choices[randomIndex])
}

let computerChoice = getComputerChoice(); //store the random Computer choice into computerChoice variable

