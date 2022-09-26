/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    var result = nums.sort((a, b)=> {
    var crr = '' + a + b;
    var next = '' + b + a;
    if (crr === next) return 0;
    return crr > next ? -1 : 1;
  }).join('');
  
  return result[0] === '0' ? '0' : result;
};