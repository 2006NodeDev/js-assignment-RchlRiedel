/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

//Sorts in ascending order
function bubbleSort(numArray) {

   numArray.sort(function(a, b){return a-b})
   return numArray
}

var anArray = [14, 35, 21, 49, 63, 56, 7, 28, 42, 70]

console.log(bubbleSort(anArray))