/*

The most efficient solution can be achieved using dynamic programing. We will create a temporary 2-dimensional array and fill it from the bottom up.

We'll traverse it row-sie. If an obstacle is found, set the value to 0. In the first row and column without an obstacle, set value to 1. If obstacle is not found in anywhere else, sum the right and upper values. At the bottom of the matrix, return the last value.

*/

function uniquePaths(arr) {
	const paths = new Matrix(arr.length, arr[0].length, 0);
	
	// initialize top left corner
if (arr[0][0] === 0) {
		paths[0][0] = 1;
	}
	
	// initialize first column in 2d matrix
	for (let i = 1; i < arr.length; i++) {
		if (arr[i][0] === 0) {
			paths[i][0] = paths[i-1][0];
		}
	}

	// initialize first row in 2d matrix
	for (let i = 1; i < arr[0].length; i++) {
		if (arr[0][j] === 0) {
			paths[0][j] = paths[0][j-1];
		}
	}

	for (let i = 1; i < arr.length; i++) {
		for (let j = 1; j < arr[0].length; i++) {
			if (arr[i][j] === 0) {
				paths[i][j] = paths[i-1][j] + paths[i][j-1];
			}
		}
	}

	// return bottom-right corner
return paths[-1][-1];
}
