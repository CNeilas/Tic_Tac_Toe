export const Gameboard = (function () {
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
