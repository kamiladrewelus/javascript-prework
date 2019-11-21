//Player
// let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
//
function playGame(playerInput){
  clearMessages();

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = 'nieznany ruch';

  function getMoveName(argMoveId){ //deklaracja funkcji ,która przyjmuje jeden parametr.

    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'nożyce';
    } else if(argMoveId == 3){
      return 'papier';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';//komentarz dodaje..
    }
  }
  playerMove = getMoveName(playerInput); //getMoveName(1)

  printMessage('Twój ruch to: ' + playerMove);
  //Computer
  let computerInput = Math.floor(Math.random() * 3 + 1);
  // console.log('Komputer wylosował: ' + computerInput);

  let computerMove = 'nieznany ruch';

  computerMove = getMoveName(computerInput);

  printMessage('Komputera ruch to: ' + computerMove);
  //wynik gry

  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Ty przegrałeś!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage('Remis!');

    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Ty przegrałeś!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
      printMessage('Remis!');

    } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Ty przegrałeś');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
      printMessage('Remis!');
    }
  }
  displayResult(computerMove, playerMove);
}
//
let rockButton = document.getElementById('play-rock');
// console.log(rockButton);
rockButton.addEventListener('click', function(){
  playGame(1);
});

let paperButton = document.getElementById('play-paper');
paperButton.addEventListener('click', function(){
  playGame(2);
});

let scissorsButton = document.getElementById('play-scissors');
scissorsButton.addEventListener('click', function(){
  playGame(3);
});
