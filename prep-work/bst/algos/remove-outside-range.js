/*

There will be three cases for every node. Either the node is outside the given range and smaller than the min value. Or the node is outside the given range and greater than the max value. Or the node is in range.

If the node is in range, we don't need to do anything. However, if the node is out of range, we remove the node and change the root of its subtree (where it was the root).

We do this by visiting every node by doing a post order traversal. When we visit a node, we make sure that its left and right subtrees are already fixed.

We either remove the root and return the right subtree as the new root. Or we remove the root and return the left subtree as a new root.

The running time is O(n), because we will visit every node in the bst.

*/

function removeOutsideRange(root, min, max) {
	if (root === null) return null;
	
	root.left = removeOutsideRange(root.left, min, max);
	root.right = removeOUtside(root.right, min, max);

	if (root.key < min) {
		let rChild = root.right;
		return rChild;
	}

	if (root.key > max) {
		let lChild = root.left;
		return lChild;
	}
	
	return root;
}
