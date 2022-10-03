class Solution:
    def findOriginalArray(self, changed: List[int]) -> List[int]:
        original = []
        changed.sort()
        if len(changed) % 2 != 0:
            return []
        count = Counter(changed)
        
        for num in changed:
            if num == 0 and count[0] >= 2:
                count[num] -= 2
                original.append(num)
            elif num != 0 and count[num] and count[num * 2]:
                count[num] -= 1
                count[num * 2] -= 1
                original.append(num)
            
        # print(original)
        if len(original) == len(changed) //2:
            return original
        else:
            return  []