function twoStrings(s1, s2) {
    // Write your code here
    /*
        DESCRIPTION
        1. create map object
        2. Loop through s1.
            a. set each character in s1 to true
        3. Looop through s2.
            a. create condition if the character is in the mao.
                i. Return "YES"
        4. return "NO"
     */
    
    let map = {}
    for(let i=0; i< s1.length;i++) {
        map[s1[i]] = true;
    }
    for(let i=0; i< s2.length;i++) {
        if(map[s2[i]])
        return "YES"
    }
        return "NO"
}
