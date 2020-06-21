/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/

//I am assuming to "splice the element" is to get rid of that element
function spliceElement(someArr, index) {
    someArr.splice(index-1, 1) //I use index -1 here to get rid of the nth term, not the term at index n
    return someArr
}

//Get rid of roses
let flowers = ["Violet", "Rose", "Lily", "Daisy"]
console.log(spliceElement(flowers, 2));
