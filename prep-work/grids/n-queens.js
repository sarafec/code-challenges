/*

The naive solution would be to generate all possible configurations of the queens on the board and print a configuration that satisfies the given constraints.

Alternatively we can use backtracking.
The idea is to place queens on one by one in different columns, we check for clashes with already placed queens. In the current column, if we find a row for which there is no clash, we mark this row and column as part of the solution. If we do not find such a row due to clashes then we backtrack and return false.
*/

function solveNQueens(board, n) {
	if (!solveNQueensUtil(board, 0, n)) {
		console.log("solution does not exist");
		return false;
	}
	return true;
}

function solveNQueensUtil(board, col, n) {
	if (col >= n) return true;

	for (let i = 0; i < n; i++) {
		// can queens be placed there
		if (isSafe(board, i, col)) {
			// place queen
			board[i][col] = 1;

			if (solveNQueensUtil(board, col + 1, n)) {
				return true;
			}

			// backtrack
			board[i][col] = 0; 
		}	
	}
	return false;
}
