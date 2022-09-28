/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
   let l = 0,
    r = people.length - 1;
  let count = 0;
  people.sort((a, b) => a - b);

  while (l <= r) {
    if (people[l] + people[r] <= limit) {
      count++;
      l++;
      r--;
    } else {
      r--;
      count++;
    }
  }

  return count;
};