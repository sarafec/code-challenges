/*
source: JavaScript: The Good Parts p. 35
problem statement:
Given a number, recursively find its factorial

input - int
output - int

running time - O(n) 
*/

function factorial(i, a){
    //i is the input value
    //a is the current factorial value

    //if a is not defined, a is equal to 1
    a = a || 1;
    if(i < 2) {
        return a;
    }
    return factorial(i - 1, a*i);
}

console.log(factorial(4));