import { BoardChecker } from "./modules/boardCheck.js";
import { Gameboard } from "./modules/gameBoard.js";
import { positions } from "./modules/positions.js";

function Game() {
  const boxCount = 9;
  const gameTable = document.getElementById("gameTable");

  for (let i = 0; i < boxCount; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.setAttribute("id", `${i + 1}`);
    gameTable.appendChild(div);
  }

  let boxes = document.querySelectorAll(".box");
  for (let box of boxes) {
    box.addEventListener("click", (e) => {
      let idOfBox = e.target.id;
      console.log(idOfBox);
      console.log(e.target.innerText);

      if (playerXObj.myTurn == true && playerOObj.myTurn == false) {
        playerXObj.useTurn(e, idOfBox);
        playerXObj.myTurn = false;
        playerOObj.myTurn = true;
      } else if (playerXObj.myTurn == false && playerOObj.myTurn == true) {
        playerOObj.useTurn(e, idOfBox);
        playerOObj.myTurn = false;
        playerXObj.myTurn = true;
      }
    });
  }
}

const playerXObj = (function PlayerX() {
  let myTurn = true;
  const sign = "x";
  let positionOfClick = "";

  function useTurn(e, id) {
    switch (id) {
      case "1":
        positionOfClick = positions.topLeft;
        break;
      case "2":
        positionOfClick = positions.topCenter;
        break;
      case "3":
        positionOfClick = positions.topRight;
        break;
      case "4":
        positionOfClick = positions.middleLeft;
        break;
      case "5":
        positionOfClick = positions.middleCenter;
        break;
      case "6":
        positionOfClick = positions.middleRight;
        break;
      case "7":
        positionOfClick = positions.bottomLeft;
        break;
      case "8":
        positionOfClick = positions.bottomCenter;
        break;
      case "9":
        positionOfClick = positions.bottomRight;
        break;
    }

    Gameboard.gameboard[positionOfClick[0]][positionOfClick[1]] = sign;
    e.target.innerText = sign;
    BoardChecker.checkBoard(positions, Gameboard);
    BoardChecker.gameState(Gameboard);
    console.log(Gameboard.gameboard);
  }

  return {
    useTurn,
    myTurn,
  };
})();

const playerOObj = (function PlayerO() {
  let myTurn = false;
  const sign = "o";
  let positionOfClick = "";

  function useTurn(e, id) {
    switch (id) {
      case "1":
        positionOfClick = positions.topLeft;
        break;
      case "2":
        positionOfClick = positions.topCenter;
        break;
      case "3":
        positionOfClick = positions.topRight;
        break;
      case "4":
        positionOfClick = positions.middleLeft;
        break;
      case "5":
        positionOfClick = positions.middleCenter;
        break;
      case "6":
        positionOfClick = positions.middleRight;
        break;
      case "7":
        positionOfClick = positions.bottomLeft;
        break;
      case "8":
        positionOfClick = positions.bottomCenter;
        break;
      case "9":
        positionOfClick = positions.bottomRight;
        break;
    }

    Gameboard.gameboard[positionOfClick[0]][positionOfClick[1]] = sign;
    e.target.innerText = sign;
    BoardChecker.checkBoard(positions, Gameboard);
    BoardChecker.gameState(Gameboard);
    console.log(Gameboard.gameboard);
  }

  return {
    useTurn,
    myTurn,
  };
})();

Game();

// BoardChecker.checkBoard(positions, Gameboard);
