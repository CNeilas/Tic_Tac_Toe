export const BoardChecker = {
  checkBoard(positions, Gameboard) {
    if (
      Gameboard.gameboard[positions.topLeft[0]][positions.topLeft[1]] == "x" &&
      Gameboard.gameboard[positions.middleCenter[0]][
        positions.middleCenter[1]
      ] == "x" &&
      Gameboard.gameboard[positions.bottomRight[0]][positions.bottomRight[1]] ==
        "x"
    ) {
      Gameboard.playerWin = true;
      Gameboard.gameEnd = true;
    } else if (
      Gameboard.gameboard[positions.topLeft[0]][positions.topLeft[1]] == "o" &&
      Gameboard.gameboard[positions.middleCenter[0]][
        positions.middleCenter[1]
      ] == "o" &&
      Gameboard.gameboard[positions.bottomRight[0]][positions.bottomRight[1]] ==
        "o"
    ) {
      Gameboard.playerOWin = true;
      Gameboard.gameEnd = true;
    } else if (
      Gameboard.gameboard[positions.topRight[0]][positions.topRight[1]] ==
        "x" &&
      Gameboard.gameboard[positions.middleCenter[0]][
        positions.middleCenter[1]
      ] == "x" &&
      Gameboard.gameboard[positions.bottomLeft[0]][positions.bottomLeft[1]] ==
        "x"
    ) {
      Gameboard.playerWin = true;
      Gameboard.gameEnd = true;
    } else if (
      Gameboard.gameboard[positions.topRight[0]][positions.topRight[1]] ==
        "o" &&
      Gameboard.gameboard[positions.middleCenter[0]][
        positions.middleCenter[1]
      ] == "o" &&
      Gameboard.gameboard[positions.bottomLeft[0]][positions.bottomLeft[1]] ==
        "o"
    ) {
      Gameboard.playerOWin = true;
      Gameboard.gameEnd = true;
    } else if (
      Gameboard.gameboard[positions.topLeft[0]][positions.topLeft[1]] == "x" &&
      Gameboard.gameboard[positions.topCenter[0]][positions.topCenter[1]] ==
        "x" &&
      Gameboard.gameboard[positions.topRight[0]][positions.topRight[1]] == "x"
    ) {
      Gameboard.playerWin = true;
      Gameboard.gameEnd = true;
    } else if (
      Gameboard.gameboard[positions.topLeft[0]][positions.topLeft[1]] == "o" &&
      Gameboard.gameboard[positions.topCenter[0]][positions.topCenter[1]] ==
        "o" &&
      Gameboard.gameboard[positions.topRight[0]][positions.topRight[1]] == "o"
    ) {
      Gameboard.playerOWin = true;
      Gameboard.gameEnd = true;
    } else if (
      Gameboard.gameboard[positions.middleLeft[0]][positions.middleLeft[1]] ==
        "x" &&
      Gameboard.gameboard[positions.middleCenter[0]][
        positions.middleCenter[1]
      ] == "x" &&
      Gameboard.gameboard[positions.middleRight[0]][positions.middleRight[1]] ==
        "x"
    ) {
      Gameboard.playerWin = true;
      Gameboard.gameEnd = true;
    } else if (
      Gameboard.gameboard[positions.middleLeft[0]][positions.middleLeft[1]] ==
        "o" &&
      Gameboard.gameboard[positions.middleCenter[0]][
        positions.middleCenter[1]
      ] == "o" &&
      Gameboard.gameboard[positions.middleRight[0]][positions.middleRight[1]] ==
        "o"
    ) {
      Gameboard.playerOWin = true;
      Gameboard.gameEnd = true;
    } else if (
      Gameboard.gameboard[positions.bottomLeft[0]][positions.bottomLeft[1]] ==
        "x" &&
      Gameboard.gameboard[positions.bottomCenter[0]][
        positions.bottomCenter[1]
      ] == "x" &&
      Gameboard.gameboard[positions.bottomRight[0]][positions.bottomRight[1]] ==
        "x"
    ) {
      Gameboard.playerWin = true;
      Gameboard.gameEnd = true;
    } else if (
      Gameboard.gameboard[positions.bottomLeft[0]][positions.bottomLeft[1]] ==
        "o" &&
      Gameboard.gameboard[positions.bottomCenter[0]][
        positions.bottomCenter[1]
      ] == "o" &&
      Gameboard.gameboard[positions.bottomRight[0]][positions.bottomRight[1]] ==
        "o"
    ) {
      Gameboard.playerOWin = true;
      Gameboard.gameEnd = true;
    } else if (
      Gameboard.gameboard[positions.topLeft[0]][positions.topLeft[1]] == "x" &&
      Gameboard.gameboard[positions.middleLeft[0]][positions.middleLeft[1]] ==
        "x" &&
      Gameboard.gameboard[positions.bottomLeft[0]][positions.bottomLeft[1]] ==
        "x"
    ) {
      Gameboard.playerWin = true;
      Gameboard.gameEnd = true;
    } else if (
      Gameboard.gameboard[positions.topLeft[0]][positions.topLeft[1]] == "o" &&
      Gameboard.gameboard[positions.middleLeft[0]][positions.middleLeft[1]] ==
        "o" &&
      Gameboard.gameboard[positions.bottomLeft[0]][positions.bottomLeft[1]] ==
        "o"
    ) {
      Gameboard.playerOWin = true;
      Gameboard.gameEnd = true;
    } else if (
      Gameboard.gameboard[positions.topCenter[0]][positions.topCenter[1]] ==
        "x" &&
      Gameboard.gameboard[positions.middleCenter[0]][
        positions.middleCenter[1]
      ] == "x" &&
      Gameboard.gameboard[positions.bottomCenter[0]][
        positions.bottomCenter[1]
      ] == "x"
    ) {
      Gameboard.playerWin = true;
      Gameboard.gameEnd = true;
    } else if (
      Gameboard.gameboard[positions.topCenter[0]][positions.topCenter[1]] ==
        "o" &&
      Gameboard.gameboard[positions.middleCenter[0]][
        positions.middleCenter[1]
      ] == "o" &&
      Gameboard.gameboard[positions.bottomCenter[0]][
        positions.bottomCenter[1]
      ] == "o"
    ) {
      Gameboard.playerOWin = true;
      Gameboard.gameEnd = true;
    } else if (
      Gameboard.gameboard[positions.topRight[0]][positions.topRight[1]] ==
        "x" &&
      Gameboard.gameboard[positions.middleRight[0]][positions.middleRight[1]] ==
        "x" &&
      Gameboard.gameboard[positions.bottomRight[0]][positions.bottomRight[1]] ==
        "x"
    ) {
      Gameboard.playerWin = true;
      Gameboard.gameEnd = true;
    } else if (
      Gameboard.gameboard[positions.topRight[0]][positions.topRight[1]] ==
        "o" &&
      Gameboard.gameboard[positions.middleRight[0]][positions.middleRight[1]] ==
        "o" &&
      Gameboard.gameboard[positions.bottomRight[0]][positions.bottomRight[1]] ==
        "o"
    ) {
      Gameboard.playerOWin = true;
      Gameboard.gameEnd = true;
    }
  },

  gameState(Gameboard) {
    if (Gameboard.gameEnd == true) {
      console.log(Gameboard.playerWin);
      console.log(Gameboard.playerOWin);
    }
  },
};
