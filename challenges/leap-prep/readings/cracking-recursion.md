### Cracking the Coding Interview - Recursion and Dynamic Programming
* Most problems that can use recurssion can be built of sub problems.
* A good candidate for recursion might sound like - "design an algorithm to compute the nth..." or "write code to list the first n..." or "Implement a method to compute all..."
* Recursive solutiosn are build off of solutions to subproblems. Many times, this will mean simply to compute f(n) by adding something, removing something, or otherwise changing the solution for f(n-1). 
* In other cases you might solve the problem for the first half of the data set, then the second half, and then merge those results.
* Three of the most common approaches to divide a problem into subproblems is bottom-up, top-down, and half-and-half.
* The bottom-up approach, we start with a simple case (i.e. list with only one element), and figure out how to solve the problem for two elements, then three, and so on. The key is to think about how you can build the solution for one case off of the previous case (or multiple previous cases).
* In the top-down approach we think about how we can divide the problem for case n into sub problems. Be care not to have overlap between the cases.
* Half-and-half approaches are effective to divide the data set in half.
* Binary serach works wiht a half-and-half approach. We look for an element in a sorted array,w e first figure out which half of the array contains the value. Then we recurse and search for it in that half.
* Merge sort is also a half-and-half approach. We sort each half of the array and then merge together the sorted halves. 
* Recursive algorithms can be very space inefficient. Each recursive call adds a layer to the stack, which means if your algorithm recurses to a depth of n, it uses at least O(n) memory.
* All recursive algorithsm can be implemented iteratively, although sometimes the code to do so is much more complex. 
* Before diving into recursive code, ask yourself how hard it would be to implement it iteratively and discuss the tradeoffs.
* Dynamic programming is mostly jsut a matter of taking a recursive algorithm and finding the overlappign subproblems (that is, the repeated calls). You then cache those results for future recursive calls.
* Example of dynamic programming - fiboanacci numbers  
Straight recursive implementation
```
function fibonacci(i) {
    if (i === 0) return 0;
    if (i === 1) return 1;
    return fibonacci(i - 1) + fibonacci(i - 2); 
}
```
Running time O(2^n);  
  
Memoized Implementation  
```
function fibonacci(n) {
    return fibonacci(n, n + 1);
}
function fibonacci(i, memo){
    if(i === 0 || i === 1) return i;

    if(memo[i] === 0) {
        memo[i] = fibonacci(i - 1, memo) + fibonacci(i - 2, memo);
    }
    return memo[i];
};
```  

Chosen Questions:
* 8.1 Triple Step
A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 stepts at a time. Implement a method to count how many posisble ways teh child can run up the stairs.
* 8.2 Robot in a Grid  
Imagine a robot sitting on the upper left corner of grid with r rows and c columns. The robot can only move in two directions, right and down, but certain cells are off-limits such that the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to the bottom right.
* 8.4 Power Set
Write a method to return all subsets of a set