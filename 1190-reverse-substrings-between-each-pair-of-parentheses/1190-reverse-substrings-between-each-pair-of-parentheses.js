/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    var reversed = [];
  var temp = [];
 for (let el of s) {
    if (el === ")") {
      var letter = reversed.pop();
      temp = [];
      while (letter !== "(") {
        temp.push(letter);
        letter = reversed.pop();
      }
	  console.log(reversed.join(""), temp);
      reversed = reversed.concat(temp);
    } else {
      reversed.push(el);
    }
  }
   return reversed.join("");
};