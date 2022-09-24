/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
      let sqrtArray = [];
let sqrt=0;
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j< 1; j++) {
      sqrt = Math.sqrt(
        (points[i][0]*points[i][0]) +  (points[i][1]*points[i][1])
      )
      sqrtArray.push(sqrt)
    }
  }

  
  // sorting
  for (let i = 0; i < sqrtArray.length; i++) {
    for (let j = i; j < sqrtArray.length; j++) {
      if (sqrtArray[i] > sqrtArray[j]) {
      // SORTING BOTH ARRAYS
        let temp = sqrtArray[i];
        sqrtArray[i] = sqrtArray[j];
        sqrtArray[j] = temp;
        temp = points[i];
        points[i] = points[j];
        points[j] = temp;
    }
  }
}

    // preparing answer
  let answer = []
  for (let i = 0; i < k; i++) {
    answer.push(points[i])
  }
  

  return answer;
};