/*
source: JavaScript: The Good Part p. 44
problem statement:
Given a number, return its fibonacci number using built in memoization functionality.

*/

let fibonacci = (function() {
    let memo = [0, 1];
    let fib = function (n) {
        let result = memo[n];
        if(typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    }
    return fib;
}());

console.log(fibonacci(4));