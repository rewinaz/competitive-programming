/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
 let freqMap = {}
    let values =[]
    let half = arr.length/2
    let sum=0
    
    for(let val of arr){
        freqMap[val]=(freqMap[val] || 0) +1
    }
    values= Object.values(freqMap)
    values.sort((a,b)=> b-a);
    let i=0;
    for(i=0; i<values.length; i++){
        sum += values[i]
        if(sum>=half) break;
    }
    return i+1;
};