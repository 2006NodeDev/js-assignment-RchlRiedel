/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    
    if (sumNum <= 1) {
        return 1
    } 
    else {
        return sumNum * factorial(sumNum -1)
    }
}

//Factorial of just one number
var n = 4
console.log(`${n}! = ${factorial(n)}`);

//Factorial of 0-10
// for (i = 0; i <=10; i++){
//     console.log(`${i}! = ${factorial(i)}`);
// }

//Need to push!!