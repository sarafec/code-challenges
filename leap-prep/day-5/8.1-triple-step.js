/*
8.1 Triple Step
A child is running up a staircase with n steps
and can hop either 1 step, 2 steps, or three steps
at a time. Implement a method to count how many possible
ways the child can run up the stairs.

Solution:
What was the very last step?
What was the last step to get to that step.
And what was the last step to get to that step.
And so on.

Add the number of these paths together.

Main logic - countWays(n-1) + countWays(n-2) + countWays(n-3)

The base case - if you have 0 steps to go, are there zero steps or one step?
You'll need to decide.

Because there is so much repeated work, this would be a good candidate for memoization.
I'll write both solutions below.
*/

// Simple Recursive Function
// running time O(3^n)
function countWays(n) {
    if (n < 0) {
        return 0;
    }
} else if (n === 0) {
    return 1;
} else {
    return countWays(n-1) + countWays(n-2) + countWays(n-3);
}

// Memoized Solution
function countWays(n) {
    var memo = [n+1];
    Array.fill(memo, -1);
    return countWays(n, memo);
}

function countWays(n, memo) {
    if (n < 0) {
        return 0;
    } else if (memo[n] > -1) {
        return memo[n];
    } else {
        memo[n] = countWays(n - 1, memo) + countWays(n-2, memo) + countWays(n-3, memo);
        return memo[n];
    }
}
