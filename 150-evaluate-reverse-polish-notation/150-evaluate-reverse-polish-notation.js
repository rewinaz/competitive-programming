/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
     const operationMap = {
    "+": true,
    "-": true,
    "/": true,
    "*": true
  };

  const stack = [];

  for (const token of tokens) {
    if (operationMap[token]) { 
      let opr1 = stack[stack.length -2],
        opr2 = stack[stack.length -1];
      stack.pop();
      stack.pop();
      stack.push(calculate(parseInt(opr1), parseInt(opr2), token));      
    } else {
      stack.push(token);
    }
  }
  
  return Math.floor(stack[0])
};

function calculate(a, b, op){
  switch (op) {
    case "*":
      return a * b;
    case "-":
      return a - b;
    case "+":
      return a + b;
    case "/":
      return a / b;
  }
};