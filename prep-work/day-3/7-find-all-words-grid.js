/* Find All Words in a Grid */

/*

Explanation: Consider every character as a starting characer and find all words
starting with it. All words starting from a character can be found using DFS.
We do DFS traversal from every cell We keep track of visited cells to make sure
that a cell is considered only once in a word.

Alternatively, we could use a trie. We wont write the solution for that in this
space.

*/

// note - isWord() is a helper method I haven't defined here

function findWords(matrix) {
	const rowLength = matrix[0].length;
	const columnLength = matrix.length;
	const visited; // create grid size MXN
	visted.prefill(false);

	let str = "";
	for (let i = 0; i < rowLength; i++) {
		for(let j = 0; j< columnLength; j++) {
			findWordsUtil(matrix, visited, i, j, str, rowLength, columnLength);
		}
	}
}

function findWordsUtil(matrix, visited, i, j, str, rowLength, columnLength) {
	visited[i][j] = true;
	str = str + matrix[i][j];

	if (isWord(str)) {
		console.log(str);
	}

	for(let row = i - 1; row <= i + 1 && row < rowLength; row++) {
		for (let col = j - 1; col <= j + 1 && col < columnLength; col++) {
			if (row >= 0 && col >= 0 && !visited[row][col]) {
				findWordsUtil(matrix, visited, row, col, str);
			}
		}
	}
	str.slice(str.length - 1);
	visited[i][j] = false;
}