class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        last_fruit = -1
        second_last_fruit = -1
        last_fruit_count = 0
        current_max=0
        max_fruit_count = 0
        for i in range(0, len(fruits)):
            if fruits[i] == last_fruit or fruits[i] == second_last_fruit:
                current_max+=1
            else:
                current_max = last_fruit_count +1
            
            if(fruits[i] == last_fruit):
                last_fruit_count+=1
            else:
                last_fruit_count = 1
            
            if fruits[i] != last_fruit:
                second_last_fruit = last_fruit
                last_fruit = fruits[i]
            max_fruit_count = max(max_fruit_count, current_max)
        return max_fruit_count