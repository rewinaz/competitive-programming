class MyCircularDeque:

    def __init__(self, k: int):
        self.deque = []
        self.size = k

    def insertFront(self, value: int) -> bool:
        if self.size > len(self.deque):
            self.deque.insert(0, value)
            return True if self.deque[0] == value else False
        else:
            return False

    def insertLast(self, value: int) -> bool:
        if self.size > len(self.deque):
            self.deque.append(value)
            return True if self.deque[-1] == value else False
        else:
            return False

    def deleteFront(self) -> bool:
        if self.deque:
            n = self.deque.pop(0)
            return True if n != -1 else False
        else:
            return False

    def deleteLast(self) -> bool:
        if self.deque:
            n = self.deque.pop(len(self.deque)-1)
            return True if n != -1 else False
        else:
            return False

    def getFront(self) -> int:
        return self.deque[0] if self.deque else -1

    def getRear(self) -> int:
        return self.deque[-1] if self.deque else -1

    def isEmpty(self) -> bool:
        return False if self.deque else True 

    def isFull(self) -> bool:
        return True if self.size == len(self.deque) else False
        


# Your MyCircularDeque object will be instantiated and called as such:
# obj = MyCircularDeque(k)
# param_1 = obj.insertFront(value)
# param_2 = obj.insertLast(value)
# param_3 = obj.deleteFront()
# param_4 = obj.deleteLast()
# param_5 = obj.getFront()
# param_6 = obj.getRear()
# param_7 = obj.isEmpty()
# param_8 = obj.isFull()