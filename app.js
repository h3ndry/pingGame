/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, dice;
//var btnRoll = 
 
scores = [0,0];
roundScores = 0;
activePlayer = 0;



document.querySelector('.dice').style.display = 'none';

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

//;

console.log(dice);


function rollDice() {
    
}

document.querySelector(".btn-roll").addEventListener('click', function() {
    //1. Random number
    dice = Math.floor(Math.random() * 6) + 1;

    //display reusulys
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = "dice-" + dice + ".png";

    //update the score if the anser is not 1
    if (dice !== 1){
        roundScores += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScores;
    }else {
       nextPlayer();
    }

});

document.querySelector(".btn-hold").addEventListener("click", function(){
    scores[activePlayer] += roundScores;
     
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

    nextPlayer();

    if (scores[activePlayer] > 100) {
        document.querySelector("name-" + activePlayer).textContent = "You are the Winer";
    }else {
        nextPlayer();
    }
});

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScores = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScores;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector('.dice').style.display = 'none';

}