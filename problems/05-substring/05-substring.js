/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */

function substring(someStr, startIndex, endIndex) {
    
    someStr.split("")
    charArray = Array.from(someStr)
    newArray = charArray.slice(startIndex, endIndex)

    try {
        if (someStr == "")
            {throw "someStr cannot be empty"}
        if (startIndex < 0) 
            {throw "startIndex cannot be negative"}
        if (isNaN(startIndex)) 
            {throw "startIndex must be a number"}
        if (startIndex >= someStr.length) 
            {throw "startIndex cannot be or excede the someStr length"}
        if (endIndex <= 0) 
            {throw "endIndex cannot be negative or 0"}
        if (isNaN(endIndex))
            {throw "endIndex must be a number"}
        if (endIndex > someStr.length)
            {throw "endIndex cannot excede the someStr length"}
        return newArray.join("") 
    } 
    catch(err){
        errorMessage = `Error- ${err}`
        console.log(errorMessage); 
        return
    }
    

} 

console.log(substring("Hello", -1, 3));
