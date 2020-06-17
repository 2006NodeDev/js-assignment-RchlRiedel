/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {

    simpleStr = someStr.toUpperCase().replace(/\s+/g, ''); //to upper case, get rid of spaces with regular expression
    simpleStr.split("") //split string
    charArray = Array.from(simpleStr) //create array
    charArray.reverse(); //reverse array
    newStr = charArray.join("") //put array back into a string

    // if (simpleStr === newStr) {
    //     return true
    // } else {
    //     return false
    // }
    //or just 
    return simpleStr === newStr 
}

console.log(isPalindrome("Was it a car or a cat I saw"));
console.log(isPalindrome("RaceCar"));

console.log(isPalindrome("blahdaslkj"));

