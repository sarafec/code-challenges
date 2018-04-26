/* Find Islands in Grid */

/*

Explanation: This is a variation on the count the number of connected components in an undirected graph.
Use DFS on each component. In each DFS call, a component is visited. Then, we call DFS on the next unvisited
component. The number of calls to DFS gives us the number of connected components.

You can also use BFS.

Running Time: O(MN), where M is the number of rows and N is the number of cols

*/

// note: how do we know the dimensions of the grid?
const ROW = 5;
const COL = 5;

function countIslands(matrix) {
	const visited; // create grid with the size [ROW][COL] of matrix

	let count = 0;
	for (let i = 0; i < ROW; i++) {
		for (let j = 0; j < COL; j++) {
			if (matrix[i][j] === 1 && !visited[i][j]) {
				DFS(matrix, i, j, visited);
				count++;
			}
		}
	}
	return count;
}

function DFS(matrix, row, col, visited) {
	const rowNbr = [-1, -1, -1, 0, 0, 1, 1, 1];
	const colNbr = [-1, 0, 1, -1, 1, -1, 0, 1];

	visited[row][col] = true;

	for (let k = 0; k < 8; k++) {
		if (isSafe(matrix, row + rowNbr[k], col + colNbr[k], visited)) {
			DFS(matrix, row + rowNbr[k], col + colNbr[k], visited);
		}
	}
}

function isSafe(matrix, row, col, visited) {
	return (row >= 0) && (row < ROW) &&
			(col >= 0) && (col < COL) &&
			(matrix[row][col] === ! && !visited[row][col]);
}