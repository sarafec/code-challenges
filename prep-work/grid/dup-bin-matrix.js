/*

A simple solution is to traverse all the rows one by one. For every row, check if the same row is present. If yes, print the row.
The time complexity of this solution is O(row^2 x col)

Another alternative (we will not implement) that will only work on a small number of columns is to convert the decimal equivalent of a row and check if a new row has the same decimal equivalent, then check if it is a duplicate row.

A more efficient solution would be to use a trie.
A trie is a data structure used for retrieval of  character data.
We would insert the matrix in a binary trie, then if the new added row is already present in the trie, then we will know that it is a duplicate row.

*/

function printDuplicateRows(matrix, m, n) {
	let head = getNewTrieNode();
	for (let i = 0; i < m; i++) {
		if (!insert(head, matrix[i], n) {
			console.log("There is a duplicate row at position: " i + 1);
}
}
}

function insert(head, arr, n) {
	let current = head;
	for (let i = 0; i < n; n++) {
		if (current.children[arr[i]] === null) {
			current.children[arr[i]] = getNewTrieNode();
		}
		current = current.children[arr[i]];
	}

	if (current.leaf) {
		return false;
	}

	current.leaf = true;
	return current.leaf;
}	

function getNewTrieNode() {
	let node = new Trie();
	node.children[0] = null;
	node.children[1] = null;
	node.leaf = false;
	return node;
}
