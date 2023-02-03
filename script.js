function computerPlay(){
    const randomNum = (Math.floor(Math.random() * 3));
    if(randomNum === 0) {
        return 'Paper';
    } else if(randomNum === 1) {
        return 'Scissors';
    } else if(randomNum === 2) {
        return 'Rock'
    }
}

// console.log(computerPlay());

function playerPlay() {
    let choice = prompt("What do you choose: Paper, Rock or Scissors?");
    if (choice.toLowerCase() === 'rock') {
        choice = 'rock';
    } else if(choice.toLowerCase() === 'paper') {
        choice = 'paper';
    } else if (choice.toLowerCase() === 'scissors'){
        choice = 'scissors';
    } else if (choice.toLowerCase !== 'paper' || 'scissors' || 'rock' ) {
        alert('Try to make a choice again!')
    } else {
        console.log('Error!')
    }
    return choice;
}

// console.log(playerPlay());

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if(player === 'paper' && computer === 'scissors') {
        return 'You Lose! Scissors beats Paper'
    } else if(player === 'paper' && computer === 'rock') {
        return 'You Win! Paper beats Rock'
    } else if(player === 'scissors' && computer === 'rock') {
        return 'You Lose! Rock beats Scissors'
    } else if(player === 'scissors' && computer === 'paper') {
        return 'You Win! Scissors beats Paper'
    } else if(player === 'rock' && computer === 'paper') {
        return 'You Lose! Paper beats Rock'
    } else if(player === 'rock' && computer === 'scissors') {
        return 'You Win! Rock beats Scissors'
    } else if (player === computer) {
        return 'Tie! Try again!'
    } else{
        return 'Error! Try again!'
    }
}

// const playerSelection = 'ROck';
// const computerSelection =  computerPlay();
// console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++){
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        const round = playRound(playerSelection, computerSelection)
        console.log(round);
    }
}

console.log(game())