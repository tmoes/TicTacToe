//  Variables
var gameboard = document.getElementById('gameBoard');
var squares = document.getElementsByClassName('cell');
var newGame = document.getElementById('newGame');
var message = document.getElementById('message');
var score = {X: 0, O: 0};
var x_score = document.getElementById('Xscore');
var o_score = document.getElementById('Oscore');
var board = ['', '', '', '', '', '', '', '', ''];
var previousWinner = 'X';
var currentWinner = null;
var XorO = null;
var moveCount = 0;

// X/O select
var charSelect = () => {
  if (!XorO) {
    XorO = previousWinner;
  } else if (XorO === 'X') {
    XorO = 'O';
  } else {
    XorO = 'X';
  }
  return XorO;
};

// -EVENT LISTENERS-
// Click on cell
for (let i = 0; i < 9; i++) {
  var square = document.getElementById(i);
  square.addEventListener('click', function(event) {
    if (!event.target.innerText) {
      event.target.append(charSelect());
      board[event.target.id] = event.target.innerText;
      moveCount++;
      if (moveCount >= 5) {
        checkWin();
      }
    }
  });
}

// Reset the game - Cannot use refresh - Must clear variables and board
newGame.addEventListener('click', () => {
  resetGame();
});


var checkWin = () => {
  // Check each row, col, diag for winner
    // Display new message
    // Set previousWinner
    // Set Score
    // Reset XorO

  // Check each row for winner
  var checkRow = [board[0] + board[1] + board[2], board[3] + board[4] + board[5], board[6] + board[7] + board[8]];
  if (checkRow[0] === 'XXX' || checkRow[1] === 'XXX' || checkRow[2] === 'XXX') {
    message.innerHTML = 'Player 1 (X) is the winner!';
    previousWinner = 'X';
    score.X++;
    currentWinner = 'X'
    XorO = null;
  }
  if (checkRow[0] === 'OOO' || checkRow[1] === 'OOO' || checkRow[2] === 'OOO') {
    message.innerHTML = 'Player 2 (O) is the winner!';
    previousWinner = 'O';
    score.O++;
    currentWinner = 'O';
    XorO = null;
  }

  // Check each column for winner
  var checkCol = [board[0] + board[3] + board[6], board[1] + board[4] + board[7], board[2] + board[5] + board[8]];
  if (checkCol[0] === 'XXX' || checkCol[1] === 'XXX' || checkCol[2] === 'XXX') {
    message.innerHTML = 'Player 1 (X) is the winner!';
    previousWinner = 'X';
    score.X++;
    currentWinner = 'X';
    XorO = null;
  }
  if (checkCol[0] === 'OOO' || checkCol[1] === 'OOO' || checkCol[2] === 'OOO') {
    message.innerHTML = 'Player 2 (O) is the winner!';
    previousWinner = 'O';
    score.O++;
    currentWinner = 'O'
    XorO = null;
  }

  // Check each diagonal for winner
  var checkDiag = [board[0] + board[4] + board[8], board[2] + board[4] + board[6]];
  if (checkDiag[0] === 'XXX' || checkDiag[1] === 'XXX') {
    message.innerHTML = 'Player 1 (X) is the winner!';
    previousWinner = 'X';
    score.X++;
    currentWinner = 'X';
    XorO = null;
  }
  if (checkDiag[0] === 'OOO' || checkDiag[1] === 'OOO') {
    message.innerHTML = 'Player 2 (O) is the winner!';
    previousWinner = 'O';
    score.O++;
    currentWinner = 'O';
    XorO = null;
  }

  // Check for tie
  if (moveCount === 9 && currentWinner === null) {
    message.innerHTML = "MEOW MEOW --- Cat's game --- MEOW MEOW";
  }

  // Updating scoreboard
  if (currentWinner) {
    x_score.innerHTML = score.X;
    o_score.innerHTML = score.O;
  }

  // Stop gameplay and reset board
  if (currentWinner) {
    setTimeout(function() {
      resetGame();
    }, 2000);
  }
};

var resetGame = () => {
  for (let i = 0; i < 9; i++) {
    var square = document.getElementById(i);
    squares[i].innerHTML = '';
    board[i] = '';
  }
  moveCount = 0;
  message.innerHTML = 'Welcome to the game!'
  currentWinner = null;
  XorO = null;
};