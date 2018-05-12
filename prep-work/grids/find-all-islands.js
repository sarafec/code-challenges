
/*

This problem is a variation on counting the number of connected components in an undirected graph.

A connected component in an undirected graph is a subgraph in which every two vertices are connected to each other by a path(s), and which is connected to no other vertices outside the subgraph.

A graph where all vertices are connected with each other has exactly one connected component. This is called a strongly connected graph.

The problem can be easily solved by doing dfs on each component. IN each dfs call, a component or a subgraph is visited. We will call dfs on the next unvisited component. The number of calls to dfs gives you the number of connected components.

Note, you could also used bfs.

A cell in a 2-dimensional matrix is connected to 8 neighbors. Unlike a standard dfs call, where we recursively call for all adjacent vertices, here we only cal the 8 neighbors. We keep track of the visited 1s so that they are not visited again.

Running time: O(row x col)

*/

function countIsland (matrix, row, col) {
	const visited = new Matrix (row, col);
	let count = 0;
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (matri[i][j] === 1 && ! visited[i][j]) {
				dfs(matrix, i, j, visited);
				count++;
			}
		}
	}
	return count;
}

function dfs (matrix, row, col, visited) {
	const rowNbr = [-1, -1, -1, 0, 0, 1, 1, 1]
	const colNbr = [-1, 0, 1, -1, 1, -1, 0, 1];
	visited[row][col] = true;
	for (let k = 0; k < 8; k++) {
		if (isSafe(matrix, row + rowNbr[k], col + colNbr[k], visited)) {
			dfs(matrix, row + rowNbr[k], col + colNbr[k], visited);
		}
	}
}

function isSafe(matrix, row, col, visited) {
	return (row >= 0) && (row < matrix.length) && 
			(col >= 0) && (col < matrix[0].length) &&
			(matrix[row][col] === 1 && !visited[row][col);
}
