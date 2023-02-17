'use strict';

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const btn_div = document.querySelector('.buttons');
const playerPoints = document.querySelector('.points-p');
const computerPoints = document.querySelector('.points-c');
const scoreTable = document.querySelector('.score');
const result = document.querySelector('.result > p');

let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    const randomNum = (Math.floor(Math.random() * 3));
    const cOptions =['rock','paper', 'scissors'];
    return cOptions[randomNum];
    // if(randomNum === 0) {
    //     return 'paper';
    // } else if(randomNum === 1) {
    //     return 'scissors';
    // } else if(randomNum === 2) {
    //     return 'rock'
    // }
}

// console.log(computerPlay());

function win(playerSelection, computerSelection) {
    playerScore++;
    playerPoints.innerHTML = playerScore;
    computerPoints.innerHTML = computerScore;
    result.innerHTML = `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}.`;
    document.getElementById(playerSelection).classList.add('green_shadow');
    setTimeout(function() {document.getElementById(playerSelection).classList.remove('green_shadow')}, 1000);


};

function lose(playerSelection, computerSelection) {
    computerScore++;
    playerPoints.innerHTML = playerScore;
    computerPoints.innerHTML = computerScore;
    result.innerHTML = `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`;
    document.getElementById(playerSelection).classList.add('red_shadow');
    setTimeout(function() {document.getElementById(playerSelection).classList.remove('red_shadow')}, 1000);
};

function draw(playerSelection, computerSelection) {
    result.innerHTML = `Draw! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} equals ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`;
    document.getElementById(playerSelection).classList.add('shadow');
    setTimeout(function() {document.getElementById(playerSelection).classList.remove('shadow')}, 1000);
};


function playerPlay() {
    rockBtn.addEventListener('click', () => playRound('rock'));
    paperBtn.addEventListener('click', () => playRound('paper'));
    scissorsBtn.addEventListener('click', () => playRound('scissors'));
//     let choice = prompt("What do you choose: Paper, Rock or Scissors?");
//     if (choice.toLowerCase() === 'rock') {
//         choice = 'rock';
//     } else if(choice.toLowerCase() === 'paper') {
//         choice = 'paper';
//     } else if (choice.toLowerCase() === 'scissors'){
//         choice = 'scissors';
//     } else if (choice.toLowerCase !== 'paper' || 'scissors' || 'rock' ) {
//         alert('Try to make a choice again!')
//     } else {
//         console.log('Error!')
//     }
//     return choice;
}

console.log(playerPlay());

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    switch (playerSelection + computerSelection) {
        case 'paperrock':
        case 'rockscissors':
        case 'scissorspaper':
            win(playerSelection, computerSelection)
            break;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            lose(playerSelection, computerSelection)
            break;
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            draw(playerSelection, computerSelection)
            break;
    }
    gameOver();
    // let player = playerSelection.toLowerCase();
    // let computer = computerSelection.toLowerCase();
    // if(player === 'paper' && computer === 'scissors') {
    //     return 'You Lose! Scissors beats Paper'
    // } else if(player === 'paper' && computer === 'rock') {
    //     return 'You Win! Paper beats Rock'
    // } else if(player === 'scissors' && computer === 'rock') {
    //     return 'You Lose! Rock beats Scissors'
    // } else if(player === 'scissors' && computer === 'paper') {
    //     return 'You Win! Scissors beats Paper'
    // } else if(player === 'rock' && computer === 'paper') {
    //     return 'You Lose! Paper beats Rock'
    // } else if(player === 'rock' && computer === 'scissors') {
    //     return 'You Win! Rock beats Scissors'
    // } else if (playerSelection === computerSelection) {
    //     return 'Draw! Try again!'
    // } else{
    //     return 'Error! Try again!'
    // }
}


// const playerSelection = 'ROck';
// const computerSelection =  computerPlay();
// console.log(playRound(playerSelection, computerSelection));

// function game() {
//     for (let i = 0; i < 5; i++){
//         let playerSelection = playerPlay();
//         let computerSelection = computerPlay();
//         const round = playRound(playerSelection, computerSelection)
//         console.log(round);
//     }
// }

// console.log(game())

function gameOver() {
    if(playerScore > computerScore && playerScore === 5) {
        btn_div.style.display = 'none';
        result.innerHTML = 'Congratulations, You Win!';
        restartGame();
    } else if (computerScore > playerScore && computerScore === 5) {
        btn_div.style.display = 'none';
        result.innerHTML = 'Computer Wins!';
        restartGame();
    }
}

function restartGame() {
    const restart = document.getElementById('restart');
    restart.style.display = 'flex';
    restart.addEventListener('click',() => {
        window.location.reload();
    })
}
