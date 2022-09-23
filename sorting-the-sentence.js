/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let a = s.split(" ");
  let sentence = "";
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if(a[j].includes(`${i+1}`))
        sentence+=a[j].slice(0,a[j].length-1)+" "
    }
  }
    return sentence.trim();
};
