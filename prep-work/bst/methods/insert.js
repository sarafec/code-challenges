/*

A binary tree is a node-based binary tree data structure with very specific properties. Wherein, the left subtree of a node contains only nodes with keys lesser than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key. The left and right subtree must also be a binary search tree.

The benefit of having the the tree ordered in such a way is that finding the min, max, or search can be done quickly - O(log n).

*/

function insert(root, key) {
	root = insertRec(root,key);
}

function insertRec(root, key) {
	if (root === null) {
		root = new Node(key);
		return root;	
	}
	
	if (key < root.key) {
		root.left = insertRec(root.left, key);
	} else if (key > root.key) {
		root.right = insertRec(root.right, key);
	}
	return root;
}
