/*

The max depth is the number of nodes along the longest path form the root node down to the deepest leaf node.

To find the max depth, we'll recursively calculate the height of left and right subtrees of a node. And assign the height of the node as max of the heights of two children plus 1.
The running time is O(n).

*/

function maxDepth(node) {
	if (node === null) {
		return 0;
	} else {
		let leftDepth = maxDepth(node.left);
		let rightDepth = maxDepth(node.right);
	
		if (leftDepth > rightDepth) {
			return leftDepth + 1;
		} else {
			return rightDepth + 1;
		}
	}
}
