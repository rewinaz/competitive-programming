/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
  let indexArray = [],
    sortedArray = [];

  for (let i = 0; i < 100; i++) indexArray[i] = 0;

  for (let i = 0; i < arr.length; i++)
    indexArray[arr[i]]+= 1;
  return indexArray;

}
