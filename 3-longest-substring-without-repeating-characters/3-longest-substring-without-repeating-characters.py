class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start = 0
        max_length = 0
        if len(s) == 1:
            return 1
        for end in range(1, len(s)):
            while s[end] in s[start: end]:
                start += 1
            max_length = max(max_length, end - start + 1)
        return max_length