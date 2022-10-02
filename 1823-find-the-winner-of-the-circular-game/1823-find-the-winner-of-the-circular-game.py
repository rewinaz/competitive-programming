class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        k=k-1
        friends = [i for i in range(1,n+1)]
        curr = 0
        def playGame(k:int, curr:int):
            if len(friends) != 1:
                curr = (curr + k)% len(friends)
                del friends[curr]
                return playGame(k,curr)
            else:
                return friends[0]
        return playGame(k, curr)