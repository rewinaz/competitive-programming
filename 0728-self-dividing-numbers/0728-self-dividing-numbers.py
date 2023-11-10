class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        ans = []
        for i in range(left, right+1):
            sArr = list(map(int, str(i)))
            isValid = False
            for j, num in enumerate(sArr):
                if num>0 and i%num==0:
                    isValid = True
                else:
                    isValid = False
                    break
            if isValid:
                ans.append(i)
        return ans
