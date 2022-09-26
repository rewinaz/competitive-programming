/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openBrackets = ["{", "[", "("];
  const bracketMap = {
    "{": "}",
    "[": "]",
    "(": ")"
  };

  const openStack = [];
  for (const c of s) {
    if (openBrackets.includes(c)) {
      openStack.push(c);
    } else {
      if (bracketMap[openStack[openStack.length - 1]] === c) {
        openStack.pop();
      } else {
        return false;
      }
    }
  }
  console.log(openStack.length == 0);
  
  return openStack.length == 0;
};