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
    piles.shift();
    piles.pop();
    coin += piles.pop();
  }

  return coin;
};