/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {

    simpleStr = someStr.toUpperCase().split(" ").join(""); //to upper case and to get rid of spaces
    charArray = Array.from(simpleStr.split("")) //create array 
    newStr = charArray.reverse().join("") //reverse array and put array back into a string

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


