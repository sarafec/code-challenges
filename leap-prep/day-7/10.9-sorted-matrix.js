/*
10.9 - Sorted Matrix Search 
Given an M x N matrix in which each row and each column is sorted in ascending order, 
write a method to find an element.

Naive solution - 
We can do binary serach on every row to find the element.
The runtime will be O(m log n), since there are m rows and it takes O(log n) time to searhc each one.

The top of the column will always be the minimum element.
The start of a row will always be the minimum column.
We can use this information ot know how to move.

In other words:
If the start of a column is greater than x, then x is to the left of the column.
If the end of the column is less than x, then x is to the right of the column.
If the start of the row is greater than x, then x is above that row.
If the end of the row is less than x, then x is below that row.

We'll start with the greatest column and work our way left.

For the more optimal solution, we will wnat to leverage the sorting property to 
find the element more efficiently. 
Because every row and column is sorted, we can parition our grid into four 
quadrants and recursively search the lower left quadrant and the upper right quadrant.
Divide into smaller quadrants and search.

*/

// naive solution
function findELement (matrix, elem) {
    let row = 0;
    let column = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if(matrix[row][col] === elem) {
            return true;
        } else if (matrix[row][col] > elem) {
            col--;
        } else {
            row++;
        }
    }
    return false;
};

// more optimal solution - binary search

