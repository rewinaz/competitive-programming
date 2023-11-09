class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        h = defaultdict(int)
        
        for word in strs:
            for i in range(1,len(word)+1):
                prefix = word[:i]
                h[prefix] += 1
              
        ans = ''
        max_len = 0
        
        for k, v in h.items():
            if v == len(strs) and len(k) >= len(ans):
                ans = k
                
        return ans