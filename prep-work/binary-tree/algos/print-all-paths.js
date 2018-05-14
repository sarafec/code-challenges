/*

We'll use an array (path) to store our current root to leaf path. Then, we'll traverse from root to all leaves in top-down fashion. While traversing, we'll store the data of all nodes in the current path in the path array. When we reach a leaf node, we'll print the path.

The running time is O(n^2), where n is the number of nodes.

*/

function printPaths(node) {
	const paths = [];
	printPathsRec(node, path, 0);
}

function printPathsRec(node, path, pathLength) {
	if (node === null) return;

	path[pathLength] = node.data;
	pathLength++;
	
	if (node.left === null && node.right === null) {
		console.log(path);
	} else {
		printPathsRecur(node.left, path, pathLength);
		printPathsRecur(node.right, path, pathLength);
	}
}
