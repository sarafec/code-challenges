/*
source: JavaScript: The Good Parts p. 45
problem statement:
Create a genearlized function that allows us to make memoized functions
The memoizer function takes an initial memo array and formula function, 
defined by the function that calls it.

input - array and formula
output - must be a  number

running time - O(n)
*/

function memoizer(memo, formula) {
    let recur = function(n) {
        var result = memo[n];
        if(typeof result !== 'number') {
            result = formula(recur, n);
            memo[n] = result;
        }
        return result;
    };
    return recur;
};

let fibonacci = memoizer([0,1], function (recur, n) {
    return recur(n - 1) + recur(n - 2)
});

let factorial = memoizer([1,1], function (recur, n) {
    return n * recur(n - 1);
});

console.log(fibonacci(4), factorial(4));