/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    piles.sort((a, b) => a - b);
  let round = piles.length / 3;
  let selectedCoins = [];
  let coin = 0;

  for (let i = 0; i < round; i++) {
      selectedCoins = [];
    selectedCoins.push(piles.shift());
    selectedCoins.push(piles.pop());
    selectedCoins.push(piles.pop());
    selectedCoins.sort((a, b) => a - b);
    coin += selectedCoins[1];
  }

  return coin;
};