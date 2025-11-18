export const Gameboard = (function () {
  let gameEnd = false;
  let playerWin = false;
  let playerOWin = false;

  let gameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  return {
    gameEnd,
    playerWin,
    playerOWin,
    gameboard,
  };
})();
