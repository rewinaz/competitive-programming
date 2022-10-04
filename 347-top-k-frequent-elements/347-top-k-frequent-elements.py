class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        l=[]
        c=Counter(nums)
        c1=c.most_common(k)
        for i in c1:
            l.append(i[0])

        return l