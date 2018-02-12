/*
8.2 Robot in a Grid  
Imagine a robot sitting on the upper left corner of grid with r rows and c columns. 
The robot can only move in two directions, right and down, but certain cells are off-limits 
such that the robot cannot step on them. Design an algorithm to find a path for the robot 
from the top left to the bottom right.

Solution:
You can only move on a grid to an adjacent spot - (r-1, c), or (r, c-1).
To find a path from the origin, we work backwards. Starting from the last cell,
find a path to each of its adjacent cells.
This can be done recursively

Running time - O(2^r+c)
Each path has r+c steps and there are two choices at each step.

*/

// maze is a grid of arrays
function getPath(maze) {
    path = [];
    if(getPath(maze, maze.length - 1, maze[0].length -1, path)) {
        return path;
    }
    return null;
}

function getPath(maze, row, col, path) {
    if(col < 0 || row < 0 || !maze[row][col]) {
        return false;
    }

    isAtOrigin = (row === 0) && (col === 0);

    if(isAtOrigin || getPath(maze, row, col-1, path) || getPath(maze, row - 1, col, path)) {
        point = [row, col];
        path.push(point);
        return true;
    }
    return false;
}