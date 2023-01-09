//Const Board (Jogo da Velha) - Loop
{
  const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  let X = 0;
  let Y = 0;
  let gameEnd = false;
  let winner = " ";
  let playTimes = 0;

  function didEnd() {
    if (
      board[0][0] === board[0][1] &&
      board[0][0] === board[0][2] &&
      board[0][0] != null
    ) {
      gameEnd = true; //first row
    } else if (
      board[1][0] === board[1][1] &&
      board[1][0] === board[1][2] &&
      board[1][0] != null
    ) {
      gameEnd = true; //second row
    } else if (
      board[2][0] === board[2][1] &&
      board[2][0] === board[2][2] &&
      board[2][0] != null
    ) {
      gameEnd = true; //third row
    } else if (
      board[0][0] === board[1][0] &&
      board[1][0] === board[2][0] &&
      board[0][0] != null
    ) {
      gameEnd = true; //first column
    } else if (
      board[0][1] === board[1][1] &&
      board[0][1] === board[2][1] &&
      board[0][1] != null
    ) {
      gameEnd = true; //second column
    } else if (
      board[0][2] === board[1][2] &&
      board[0][2] === board[2][2] &&
      board[0][2] != null
    ) {
      gameEnd = true; //third column
    } else if (
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2] &&
      board[0][0] != null
    ) {
      gameEnd = true; //first diagonal
    } else if (
      board[2][0] === board[1][1] &&
      board[2][0] === board[0][2] &&
      board[2][0] != null
    ) {
      gameEnd = true; //second diagonal
    }
  }

  //Loop starts here
  while (gameEnd != true) {
    X = prompt("Where do you want to put it? (type X)");
    Y = prompt("Where do you want to put it? (type Y)");

    for (let i = 0; i < 1; ) {
      if (X == 1 && Y == 1 && board[0][0] === null) {
        board[0][0] = "X";
        i++;
      } else if (X == 1 && Y == 2 && board[0][1] === null) {
        board[0][1] = "X";
        i++;
      } else if (X == 1 && Y == 3 && board[0][2] === null) {
        board[0][2] = "X";
        i++;
      } else if (X == 2 && Y == 1 && board[1][0] === null) {
        board[1][0] = "X";
        i++;
      } else if (X == 3 && Y == 1 && board[2][0] === null) {
        board[2][0] = "X";
        i++;
      } else if (X == 2 && Y == 2 && board[1][1] === null) {
        board[1][1] = "X";
        i++;
      } else if (X == 2 && Y == 3 && board[1][2] === null) {
        board[1][2] = "X";
        i++;
      } else if (X == 3 && Y == 2 && board[2][1] === null) {
        board[2][1] = "X";
        i++;
      } else if (X == 3 && Y == 3 && board[2][2] === null) {
        board[2][2] = "X";
        i++;
      } else {
        X = prompt("Invalid answer. Where do you want to put it? (type X)");
        Y = prompt("Where do you want to put it? (type Y)");
      }
    }

    playTimes++;

    didEnd();
    if (gameEnd === true) {
      winner = "player 1";
      console.log(board);
      console.log(`The winner is ${winner}!`);
      break;
    }
    //function

    if (playTimes === 9) {
      console.log("This is a draw!");
      break;
    }

    console.log(board);

    X = prompt("Where do you want to put it? (type X)");
    Y = prompt("Where do you want to put it? (type Y)");

    for (let i = 0; i < 1; ) {
      if (X == 1 && Y == 1 && board[0][0] === null) {
        board[0][0] = "O";
        i++;
      } else if (X == 1 && Y == 2 && board[0][1] === null) {
        board[0][1] = "O";
        i++;
      } else if (X == 1 && Y == 3 && board[0][2] === null) {
        board[0][2] = "O";
        i++;
      } else if (X == 2 && Y == 1 && board[1][0] === null) {
        board[1][0] = "O";
        i++;
      } else if (X == 3 && Y == 1 && board[2][0] === null) {
        board[2][0] = "O";
        i++;
      } else if (X == 2 && Y == 2 && board[1][1] === null) {
        board[1][1] = "O";
        i++;
      } else if (X == 2 && Y == 3 && board[1][2] === null) {
        board[1][2] = "O";
        i++;
      } else if (X == 3 && Y == 2 && board[2][1] === null) {
        board[2][1] = "O";
        i++;
      } else if (X == 3 && Y == 3 && board[2][2] === null) {
        board[2][2] = "O";
        i++;
      } else {
        X = prompt("Invalid answer. Where do you want to put it? (type X)");
        Y = prompt("Where do you want to put it? (type Y)");
      }
    }

    playTimes++;

    didEnd();
    if (gameEnd === true) {
      winner = "player 2";
      console.log(board);
      console.log(`The winner is ${winner}!`);
      break;
    }
    //function

    if (playTimes === 9) {
      console.log("This is a draw!");
      break;
    }

    console.log(board);
  }
  //Loop encerra aqui
}
