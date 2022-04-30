const player1choices = document.querySelectorAll('.p1choice');
const player2choices = document.querySelectorAll('.p2choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
var player1Choice;
var player2Choice;
var p1Name = 'Player 1';
var p2Name = 'Player 2';
const scoreboard = {
  player1: 0,
  player2: 0,
  draw: 0
};
let gameCount = 0

// game function
function play(e) {
  restart.style.display = 'inline-block';
  /* By writing this condition we replace the player 1 choice with null 
  By doing this we give function an oppurtunity to listen to second player choice */
  if(!player1Choice && e.target.id.indexOf("p1")==0){
    player1Choice = e.target.id.replace("p1", "");
  
  }

  if(!player2Choice && e.target.id.indexOf("p2")==0){
    player2Choice = e.target.id.replace("p2", "");

  }  
  if(player1Choice && player2Choice){
    const winner = getWinner(player1Choice, player2Choice);
    showWinner(winner, player1Choice, player2Choice);

    gameCount= gameCount+1;
    refreshGameCountDisplay();
  }
}

//In function play, setting the restart button style as inline block
//storing player choice and computer choice in getWinner function

// Get computers choice
// function getComputerChoice() {
//     //rand variable is used to generate computer AI result
//   const rand = Math.random();
//   if (rand < 0.34) {
//     return 'rock';
//   } else if (rand <= 0.67) {
//     return 'paper';
//   } else {
//     return 'scissors';
//   }
// }

// function getPlayer2Choice(p1, p2){
    

//     }
// }

//math.random function is used to randomly select rock, paper or scissors
//math.random function chooses from 0 to 1 exclusive 1 and inclusive 0
//If Statement: In If condition if rand value is less than 0.34, then rock is selected
//Else If: In else if condition paper is choosen when rand vale is less than or equal to 0.67 
//Else: In Else condition scissor is selected 


// game winner function
function getWinner(p1, p2) {
    /*We write all possible scenarios of result*/
  if (p1 === p2) {  //when player1 and Player2 choose either rock,paper or scisccor it's a draw game 
    return 'draw';
  } else if (p1 === 'rock') {
    if (p2 === 'paper') {
      return 'player2';  
    } else {
      return 'player1';
    }
  } else if (p1 === 'paper') {
    if (p2 === 'scissors') {
      return 'player2';
    } else {
      return 'player1';
    }
  } else if (p1 === 'scissors') {
    if (p2 === 'rock') {
      return 'player2';
    } else {
      return 'player1';
    }
  }
}


/*In first else if statement: if player chooses rock then computer can choose between two choices either paper or scissor, 
  if com chooses paper then player loses, if computer chooses scissor then player wins
  
  In second else if statement: if player chooses paper the computer can choose between two chocies either rock or scissor,
  if computer chooses rock then player wins, if computer chooses scissor then player loses

   In third else if statement: if player chooses scissor the computer can choose between two chocies either rock or paper,
  if computer chooses rock then player loses, if computer chooses paper then player wins
  */


function showWinner(winner,player1Choice, player2Choice) {
//show winner function is used to display the result of the game
  if (winner === 'player1') {
    // Inc player score
    scoreboard.player1++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-win">${p1Name} Won</h1
      <i class="fas fa-hand-${player1Choice} fa-10x"></i>
      <p>${p1Name} Chose <strong>${player1Choice.charAt(0).toUpperCase() +
        player1Choice.slice(1)}</strong></p>
      <p>${p2Name} Chose <strong>${player2Choice.charAt(0).toUpperCase() +
          player2Choice.slice(1)}</strong></p>
    `;
  } else if (winner === 'player2') {
    // Inc computer score
    scoreboard.player2++;
    // Show modal result
    result.innerHTML = `
      <h1 class="text-win">${p2Name} Won</h1>
      <i class="fas fa-hand-${player2Choice} fa-10x"></i>
      <p>${p1Name} Chose <strong>${player1Choice.charAt(0).toUpperCase() +
        player1Choice.slice(1)}</strong></p>
      <p>${p2Name} Chose <strong>${player2Choice.charAt(0).toUpperCase() +
          player2Choice.slice(1)}</strong></p>
    `;
  } else {
      scoreboard.draw++;
    result.innerHTML = `
      <h1>It's A Draw</h1>
      <i class="fas fa-hand-'It\'s A Draw' fa-10x"></i>
      <p>${p1Name} Chose <strong>${player1Choice.charAt(0).toUpperCase() +
        player1Choice.slice(1)}</strong></p>
      <p>${p2Name} Chose <strong>${player2Choice.charAt(0).toUpperCase() +
          player2Choice.slice(1)}</strong></p>
    `;
  }
  resetPlayerChoice();
 


  /*In if statement: If condtion checks if player is winner and displays that YOU WIN and display the icon computer choose 
  
  In else if statement: Else if contion checks if computer is winner and displays YOU LOSE and display the icon computer choose

  In else statement: It displays IT"S A DRAW and displays the icon computer choose 
  */ 

  // Show score
  setScoreContent();
  modal.style.display = 'block';
}

function addListeners(){
  /*This function is used to read input dynamically from user using the id of input tag of player 1 and player 2 
    and change their names dynamically*/
  p1namedisplay.addEventListener('click', function(){
      
    document.getElementById('p1namedisplay').style.display = 'none';
    document.getElementById('p1name').style.display = 'inline';
});
/*These change functions are used to change the name in the middle of ythe game 
without actually refreshing the game */ 
p1name.addEventListener('change', function(){
if(document.getElementById('p1name').value){
  document.getElementById('p1namedisplay').innerHTML = document.getElementById('p1name').value;
  p1Name = document.getElementById('p1name').value;    
}
document.getElementById('p1namedisplay').style.display = 'inline';    
document.getElementById('p1name').style.display = 'none';

});
// The same goes with player 2 name too
p2namedisplay.addEventListener('click', function(){
    
document.getElementById('p2namedisplay').style.display = 'none';
document.getElementById('p2name').style.display = 'inline';
});

p2name.addEventListener('change', function(){

if(document.getElementById('p2name').value){
  document.getElementById('p2namedisplay').innerHTML = document.getElementById('p2name').value;
  p2Name = document.getElementById('p2name').value;    
}
document.getElementById('p2namedisplay').style.display = 'inline';    
document.getElementById('p2name').style.display = 'none';


});
//To change player  1 & 2 in display div
document.getElementById('pl1').innerHTML = p1Name
document.getElementById('pl2').innerHTML = p2Name
}

// Restart game
function restartGame() {
  scoreboard.player1 = 0;
  scoreboard.player2 = 0;
  scoreboard.draw = 0;
  setScoreContent();
  
  resetPlayerChoice();
  gameCount = 0;
  refreshGameCountDisplay();
}

function setScoreContent(){
  score.innerHTML = `
  <p><span id="p1namedisplay">${p1Name}</span><input type="text" id="p1name" style="display:none;">: ${scoreboard.player1}</p>
  <p><span id="p2namedisplay">${p2Name}</span><input type="text" id="p2name" style="display:none;">: ${scoreboard.player2}</p>     
  <p>Draw: ${scoreboard.draw}</p>
  `;
  addListeners();
}

function refreshGameCountDisplay(){
  document.getElementById('noofgames').innerHTML = ` <p id="noofgames" style="background-color: black; color: white; text-align: center; margin: auto; width: 200px;">Number of games played:  ${gameCount} </p>` 
  
}

function resetPlayerChoice(){
  player1Choice = '';
  player2Choice = '';
 // alert('player1Choice='+player1Choice+', player2Choice='+player2Choice);
 // alert('called playerchoice reset');
}

// Clear modal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}



// Event listeners
player1choices.forEach(p1choice => p1choice.addEventListener('click', play));
player2choices.forEach(p2choice => p2choice.addEventListener('click', play));
addListeners();

//player1choices.forEach(p1choice,p2choice => p1choice,p2choice.addEventListener('click',function(){
//    gameCount += 1
//    document.getElementById('noofgames').innerHTML = ` <p id="noofgames" style="background-color: black; color: white; text-align: center; margin: auto; width: 200px;">Number of games played:  ${gameCount} </p>` 
//}))
// array1.forEach(element => console.log(element));
// function choice(){
//     const p1choice = addEventListener('click')
//     const p2choice = addEventListener('click')
//     choice().forEach(p1choice,p2choice => {
//         play()
//     });
// }


window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);

