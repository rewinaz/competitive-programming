Intuition
​
Sort the input array **nums**
Sliding window prolem actually,
the key is to find out the valid condition:
k + sum >= size * max
which is
k + sum >= (j - i + 1) * nums[j]
​
Explanation
​
For every new element nums[j] to the sliding window,
Add it to the sum by sum += nums[j].
Check if it'a valid window by
sum + k < (long)nums[j] * (j - i + 1)
​
If not, removing nums[i] from the window by
sum -= [i] and i += 1.
​
Then update the res by res = max(res, j - i + 1).
​
I added solution 1 for clearly expain the process above.
Don't forget to handle the overflow cases by using long.
​
Complexity
​
Time O(sort)
Space O(sort)