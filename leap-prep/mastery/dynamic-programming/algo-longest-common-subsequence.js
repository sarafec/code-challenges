function lcs( charX, charY, length1, length2 ) {
  let grid = [charX, charY];


    for (let i=0; i<=length1; i++) {

        for (let j=0; j<=length2; j++) {

            if (i == 0 || j == 0) {
                grid[i][j] = 0;
            } else if (charX[i-1] == charY[j-1]) {
                grid[i][j] = grid[i-1][j-1] + 1;
            } else {
                grid[i][j] = Math.max(grid[i-1][j], grid[i][j-1]);
            }
        }

    }
    return grid[length1][length2];
}