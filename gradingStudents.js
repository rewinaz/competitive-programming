/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    const newGrade = []
    for(let i=0; i < grades.length; i++){
        let nextMultiple= ((Math.floor(grades[i]/5)) +1)*5
        if(nextMultiple - grades[i] < 3 && grades[i] > 37) {
            newGrade.push(nextMultiple)
            console.log(nextMultiple)
        }
        else {
            newGrade.push(grades[i])
            console.log(grades[i])
        }
    }
    return newGrade;
}
