/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let newArray = []
 let key = 0;
  let count=0;

  for(let i=0;i<nums.length;i++) {
    count=0;
    for(let j=0;j<nums.length;j++) {
      if(nums[i] > nums[j]) count++;
    }
    newArray[i] = count;
  }
  return newArray
};
