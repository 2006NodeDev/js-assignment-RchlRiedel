/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

//recursive function
// function fib(n) {

//     if (n<=1)
//         return n
//     return fib(n-1) + fib(n-2)

// }

//dynamic programming
function fibImproved(n) {
    let a = 0, b = 1, c; 
        if (n == 0) 
            return a; 
        for (let i = 2; i <= n; i++) 
        { 
            c = a + b; 
            a = b; 
            b = c; 
        } 
        return b; 
}
//Just display a fibonacci number
//console.log(fib(10));
console.log(fibImproved(10)); 

//Display first 10 fibonacci numbers (not including 0)
// for (var i = 1; i <=23; i++){
//     console.log(fibImproved(i));
// }