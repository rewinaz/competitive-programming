class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        answer = []
        j=0
        for i,num in enumerate(nums1):
            n = -1
            j=nums2.index(num)+1
            while j< len(nums2):
                if(nums2[j] > num):
                    n = nums2[j]
                    break
                j+=1
            answer.append(n)
        return answer