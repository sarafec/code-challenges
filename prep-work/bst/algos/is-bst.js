/*

An inefficient solution looks at each node, checks if the max value in the left subtree is smaller than that node. And that the min value in the right subtree is greater than the node.

A more efficient solution removes the need to traverse the same parts of the tree multiple times. It looks at each node only once. It uses a helper function that traverses down the tree keeping track of the min and max allowed value. We will initialize the min and max as Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER

An alternative solution (we won't implement), is to do an in-order traversal of the given tree and store in a temp array. If the temp array is sorted in ascending order then it is a bst. 
We can avoid using the auxiliary space by keeping track of the previously visited node. If the value of the currently visited node is less than the previous value, then the tree is not a BST.


The running time of this implementation is O(n).
The space complexity is O(n) - call stack

*/

function isBST(root) {
	return isBSTUtil(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function isBSTUtil(node, min, max) {
	if (node === null) {
		return true;
	}

	if (node.data < min || node.data > max) {
		return false;
	}

	return (isBSTUtil(node.left, min, node.data-1) && isBSTUtil(node.right, node.data+1, max));
}