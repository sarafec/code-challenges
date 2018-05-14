/*

There are three options when a bst node is to be deleted. 
-- The node is a leaf, in which case we'll simply remove it.
-- The node to be deleted has one child, in which case we'll copy the child to the node and delete the child. 
-- Or the node has two children. In that case, we'll find the in-order successor of the node. We'll copy contents of the inorder successor to the node and delete the inorder successor.

The inorder successor can be obtained by finding the minimum value in the right child of the node.

The worst case time complexity of a delete operation is O(h), where h is the height of the tree. That is because we may have to travel from the root to the deepest leaf node. THe height of the skewed tree may become n and the time complexity of delete operation may become O(n).

*/

function remove(root, key) {
	if (root === null) return root;

	if (key < root.key) {
		root.left = remove(root.left, key);
	} else if (key > root.key) {
		root.right = remove(root.right, key);
	} else {
		if (root.left === null) {
			let temp = root.right;
			return temp;
		} else if (root.right === null) {
			let temp = root.left;
			return temp;
		}

		temp = minValNode(root.right);
		root.key = temp.key;
		root.right = remove(root.right, temp.key);
	}
	return root;
}

function minValNode(node){
	let current = node;
	// find the leftmost leaf
	while (current.left !== null) {
		current = current.left;
	}
	return node;
}
