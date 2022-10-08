class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        total = sum(nums)
        sumList = [nums[0]]
        for i, num in enumerate(nums):
            if i > 0: 
                sumList.append(sumList[i-1] + num)
            if sumList[i] - num == total - sumList[i]:
                return i
        return -1