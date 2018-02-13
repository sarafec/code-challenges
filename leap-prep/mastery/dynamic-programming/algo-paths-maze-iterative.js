//adapted from https://www.geeksforgeeks.org/count-number-ways-reach-destination-maze/
// no memoization

// maze is a grid
function countPaths(maze, row, col) {
    // If the initial cell is blocked, 
    // there is no way of moving anywhere
    if (maze[0][0] === -1)
        return 0;
 
    // Initializing the leftmost column
    for (let i = 0; i < row; i++) {
        if (maze[i][0] === 0) {
            maze[i][0] = 1;
 
        // If we encounter a blocked cell in leftmost row, there is no way of visiting any cell directly below it.
        } else {
            break;
        }
    }
 
    // Similarly initialize the topmost row
    for (let i =1 ; i < col ; i++) {
        if (maze[0][i] == 0) {
            maze[0][i] = 1;
 
        // If we encounter a blocked cell in bottommost row, there is no way of visiting any cell directly below it.
        } else {
            break;
        }
    }
 
    // The only difference is that if a cell is -1, simply ignore it else recursively compute count value maze[i][j]
    for (let i = 1; i < row; i++) {

        for (let j = 1; j < col ; j++) {
            // If blockage is found, ignore this cell 
            if (maze[i][j] == -1)
                continue;
 
            // If we can reach maze[i][j] from  maze[i-1][j] then increment count.
            if (maze[i - 1][j] > 0)
                maze[i][j] = (maze[i][j] + 
                             maze[i - 1][j]);
 
            // If we can reach maze[i][j] from maze[i][j-1] then increment count.
            if (maze[i][j - 1] > 0)
                maze[i][j] = (maze[i][j] + 
                              maze[i][j - 1]);
        }
    }
 
    // If the final cell is blocked, output 0, otherwise the answer
    return (maze[row - 1][col - 1] > 0) ? 
            maze[row - 1][col - 1] : 0;
}