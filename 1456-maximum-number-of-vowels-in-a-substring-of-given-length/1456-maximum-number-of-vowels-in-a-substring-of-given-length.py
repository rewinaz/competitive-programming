class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = {'a', 'e', 'i', 'o', 'u'}
        count = 0
        maxCount = 0
        for i, letter in enumerate(s):
            if letter in 'aeiou':
                count += 1
            if i >= k and s[i - k] in 'aeiou':
                count -= 1
            maxCount = max(maxCount, count)
        return maxCount