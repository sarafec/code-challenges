function countPaths(grid, row, col, paths) {
    if(!validSquare(grid, row, col))
        return 0;

    if(isAtEnd(grid, row, col)) 
        return 1;
    
    if(paths[row][col] === 0) {
        paths[row][col] = countPaths(grid, row + 1, col) + countPaths(grid, row, col + 1);
    }
    return paths[row][col];
};

// runtime - O(n^2)