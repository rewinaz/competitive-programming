/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
//     Sorting the array
  let max = Math.max.apply(null, nums);
  let indexArray = [],
    sortedArray = [];

  for (let i = 0; i <= max; i++) indexArray[i] = 0;

  for (let i = 0; i < nums.length; i++) indexArray[nums[i]] += 1;
  
  for (let i = 1; i <= max; i++)
    indexArray[i] +=indexArray[i-1];
    
    for (let i = 0; i < nums.length; i++) {
        sortedArray[indexArray[nums[i]]-1] = nums[i];
        indexArray[nums[i]]--;
      }
    for(let i=0;i<nums.length;i++) nums[i] = sortedArray[i]
    

};