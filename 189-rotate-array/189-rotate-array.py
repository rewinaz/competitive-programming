class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        if not len(nums) <=1:
            for i in range(k):
                nums[0:0] = nums[-1:]
                nums.pop(len(nums)-1)
        