/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
      let stack = [];

  let i = 0;
  let n = popped.length;

  for (const num of pushed) {
    stack.push(num);
    while (stack && i < n && stack[stack.length - 1] === popped[i]) {
      i++;
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
};