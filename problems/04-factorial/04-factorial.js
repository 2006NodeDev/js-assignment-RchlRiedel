/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */

function factorial(sumNum) {
    if (sumNum == 1 ) {
        return 1
    } else if (sumNum < 1) {
        return "Please input a positve number!";  
    } else {
        return sumNum * factorial(sumNum - 1)
    } 
}

function factorialImproved(sumNum){
    let a = 1, b = 1, c
    if (sumNum == 1 ) {
        return 1
    } else if (sumNum > 1) {
        for (i = 1; i <= sumNum; i ++){
            c = a * b 
            a ++
            b = c       
        }
        return c
    } else {
        return "Please input positive number!"
    }
}

var n = 8
console.log(`${n}! = ${factorial(n)}`);
console.log(`${n}! = ${factorialImproved(n)}`);
