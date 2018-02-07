/*
source: JavaScript: The Good Parts p. 35

problem statement:
Given a number, recursively find its factorial


running time - O(n)

work left to do:
1 - write explaination
2 - write iteratively
3 - test

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