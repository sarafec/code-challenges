/*

Problem Statement:
Given a stack of integers, 
sort it from least to greatest using another stack. 

My thoughts:
Assumes a stack implementation is available

Solution adapted from https://www.geeksforgeeks.org/sort-a-stack-using-recursion/

*/

// insert an item (int) in some way
function sortInsert(stack, int) {
    if(stack.isEmpty() || int > stack.peek()) {
        stack.push(int);
        return;
    }

    // if top is greater, remove the top item and return
    let temp = stack.pop();
    sortedInsert(stack, int);

    put back the top item removed earlier
    stack.push(temp);
}

function sortStack(stack) {
    if(!stack.isEmpty()) {
        let int = stack.pop();
        sortStack(stack);

        sortedInsert(stack, int);
    }
}

let stack = [5, 17, 32, 6, 1, 4];
sortStack(stack);