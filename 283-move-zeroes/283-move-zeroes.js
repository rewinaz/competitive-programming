/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let l=0, r=nums.length-1;
    let temp;
    
    while(l<r) {
        if(nums[l] === 0){
            // swap(nums,l,r)
            nums.splice(l,1)
            nums.push(0)
            r--;
            l--;
        }else {
            l++;
        }
    }
};


function swap(nums, l,r) {
    let i=l;
            while(i<r) {
                  temp=nums[i]
                    nums[i]=nums[i+1]
                    nums[i+1]=temp
                    i++
                  }
}