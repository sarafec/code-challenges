/*
source: JavaScript: The Good Parts p. 35

problem statement:
Given a number, find its fibonacci number. 
A fibonacci number is the sum of the two previous numbers.

running time - O(n)

work left to do:
1 - write explaination
2 - write iteratively
3 - test

*/

function fibonacci(n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

/*
Note: this could be written with if statements instead of the ternary operator
Simply replace that statement with - 

    if(n < 2) {
        return n;
    } else {
        fibonacci(n - 1) + fibonacci(n - 2)
    }
*/