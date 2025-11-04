export const BoardChecker = {
  checkBoard(positions, Gameboard) {
    if (
      (positions.topLeft == "x" &&
        positions.middleCenter == "x" &&
        positions.bottomRight == "x") ||
      (positions.topLeft == "o" &&
        positions.middleCenter == "o" &&
        positions.bottomRight == "o") ||
      (positions.topRight == "x" &&
        positions.middleCenter == "x" &&
        positions.bottomLeft == "x") ||
      (positions.topRight == "o" &&
        positions.middleCenter == "o" &&
        positions.bottomLeft == "o")
    ) {
      Gameboard.gameEnd = true;
    }

    if (
      (positions.topLeft == "x" &&
        positions.topCenter == "x" &&
        positions.topRight == "x") ||
      (positions.topLeft == "o" &&
        positions.topCenter == "o" &&
        positions.topRight == "o")
    ) {
      Gameboard.gameEnd = true;
    }
    if (
      (positions.middleLeft == "x" &&
        positions.middleCenter == "x" &&
        positions.middleRight == "x") ||
      (positions.middleLeft == "o" &&
        positions.middleCenter == "o" &&
        positions.middleRight == "o")
    ) {
      Gameboard.gameEnd = true;
    }
    if (
      (positions.bottomLeft == "x" &&
        positions.bottomCenter == "x" &&
        positions.bottomRight == "x") ||
      (positions.bottomLeft == "o" &&
        positions.bottomCenter == "o" &&
        positions.bottomRight == "o")
    ) {
      Gameboard.gameEnd = true;
    }

    if (
      (positions.topLeft == "x" &&
        positions.middleLeft == "x" &&
        positions.bottomLeft == "x") ||
      (positions.topLeft == "o" &&
        positions.middleLeft == "o" &&
        positions.bottomLeft == "o")
    ) {
      Gameboard.gameEnd = true;
    }
    if (
      (positions.topCenter == "x" &&
        positions.middleCenter == "x" &&
        positions.bottomCenter == "x") ||
      (positions.topCenter == "o" &&
        positions.middleCenter == "o" &&
        positions.bottomCenter == "o")
    ) {
      Gameboard.gameEnd = true;
    }
    if (
      (positions.topRight == "x" &&
        positions.middleRight == "x" &&
        positions.bottomRight == "x") ||
      (positions.topRight == "o" &&
        positions.middleRight == "o" &&
        positions.bottomRight == "o")
    ) {
      Gameboard.gameEnd = true;
    }
  },
};
