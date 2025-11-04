import { BoardChecker } from "./modules/boardCheck.js";

const Gameboard = (function () {
  let gameEnd = false;

  const gameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  return {
    gameEnd,
    gameboard,
  };
})();

const positions = {
  topLeft: Gameboard.gameboard[0][0],
  topCenter: Gameboard.gameboard[0][1],
  topRight: Gameboard.gameboard[0][2],
  middleLeft: Gameboard.gameboard[1][0],
  middleCenter: Gameboard.gameboard[1][1],
  middleRight: Gameboard.gameboard[1][2],
  bottomLeft: Gameboard.gameboard[2][0],
  bottomCenter: Gameboard.gameboard[2][1],
  bottomRight: Gameboard.gameboard[2][2],
};

BoardChecker.checkBoard(positions, Gameboard);
