//Player
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

// if(playerInput == '1'){
//   playerMove = 'kamień';
// }
// else if(playerInput == '2'){
//   playerMove = 'papier';
// }
// else if(playerInput == '3'){
//   playerMove = 'nożyce';
// }
function getMoveName(argMoveId){

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
playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);
//Computer
let computerInput = Math.floor(Math.random() * 3 + 1);
console.log('Komputer wylosował: ' + computerInput);

// if(computerInput == '1'){
//   computerMove = 'kamień';
// }
// else if(computerInput == '2'){
//   computerMove = 'papier';
// }
// else if(computerInput == '3'){
//   computerMove = 'nożyce';
// }
computerMove = getMoveName(computerInput);

printMessage('Komputera ruch to: ' + computerMove);
//wynik gry
if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if( computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Ty przegrałeś!');
} else if( computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis!');

} else if( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
} else if( computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Ty przegrałeś!');
} else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Remis!');

} else if( computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Ty przegrałeś');
} else if( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
} else if( computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Remis!');
}
