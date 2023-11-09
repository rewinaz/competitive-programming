class Solution:
    def calPoints(self, operations: list[str]) -> int:
        ans = []
        for i,val in enumerate(operations):
            if val=="+":
                ans.insert(len(ans), ans[len(ans)-1] + ans[len(ans)-2])
            elif val=="C":
                ans.pop(len(ans)-1)
            elif val=="D":
                ans.insert(len(ans), ans[len(ans)-1]*2)
            else:
                ans.insert(len(ans), int(val))
        return sum(ans)
