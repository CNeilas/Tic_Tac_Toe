import { BoardChecker } from "./modules/boardCheck.js";
import { Gameboard } from "./modules/gameBoard.js";
import { positions } from "./modules/positions.js";

function initGame() {
  const boxCount = 9;
  const gameTable = document.getElementById("gameTable");

  for (let i = 0; i < boxCount; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    gameTable.appendChild(div);
  }
}

const PlayerX = function (x) {
  let myTurn = true;
  x = "x";
};

const PlayerCPU = function (o) {
  let myTurn = false;
  o = "o";
};

initGame();

// BoardChecker.checkBoard(positions, Gameboard);
