/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  
    someStr.split("")
    charArray = Array.from(someStr)
    charArray.reverse();
    return charArray.join("")

}

console.log(reverseStr("Hello World!"));
