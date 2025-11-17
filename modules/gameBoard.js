export const Gameboard = (function () {
  let gameEnd = false;
  let playerWin = false;
  let cpuWin = false;

  let gameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  return {
    gameEnd,
    playerWin,
    cpuWin,
    gameboard,
  };
})();
