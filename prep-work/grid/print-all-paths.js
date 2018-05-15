/* 

We will implement a simple recursive algorithm, from each cell print all paths going down and going to the right.

*/

function printAllPaths(matrix, m, n) {
	const path = new Array(m + n);
	printAllPathsUtil(matrix, 0, 0, m, n, path, 0)
}

/*
matrix - pointer to the starting of matrix
i, j - current point in our matrix, initialized as 0, 0
m, n - dimensions of matrix
pi - next index to be filled in path array
path - path traversed by the robot until now

*/
function printAllPathsUtil(matrix, i, j, m, n, path, pi) {
	
	// reached the bottom of the matrix
	if (i === m - 1) {
		for (let k = j; k < n; k++) {
			path[pi + k - j] = (matrix + i * n) + k;
		}
		for (let l = 0; l < pi + n - j; l++) {
			console.log(path[l]);
		}
		return;
	}
	
	// reached the right corner of the matrix
	if (j === n - 1) {
		for (let k = i; k < m; k++) {
			path[pi + k - 1] = (matrix + k * n) + j;
		}
		for (let l = 0; l < pi + m - i; l++) {
			console.log(path[l]);
		}
		return;
	}
	// add the current cell to the path being generated
	path[pi] = (matrix + i *n) + j;
	
	// print all the paths that are possible after moving down
	printAllPathsUtil(matrix, i+1, j, m, n, path, pi + 1);
	
	// print all the paths that are possible after moving right
	printAllPathsUtil(matrix, i, j+1, m, n, path, pi + 1);
}

