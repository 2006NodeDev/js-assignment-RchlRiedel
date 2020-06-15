/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */

var n;

function fib(n) {

    if (n<=1)
        return n
    return fib(n-1) + fib(n-2)

}

//Display first 10 fibonacci numbers (not including 0)
// for (var i = 1; i <=10; i++){
//     console.log(fib(i));
// }

//Just display nth fibonacci number
console.log(fib(23));
