/*

We'll traverse the tree in preorder fashion. For every visited node, see if the subtree rooted with this node is identical in our other tree.

The time complexity is O(mn), where m and n are the number of nodes in the number of nodes in the given trees.

*/

function isSubtree(tree1, tree2) {
	if (tree2 === null) return true;
	if (tree1 === null) return false;

	if (areIdential(tree1, tree2)) {
		return true;
	}

	return isSubtree(tree1.left, tree2) || isSubtree(tree1.right, tree2);
}

function areIdentical(root1, root2) {
	if (root1 === null && root2 === null) return true;
	if (root1 === null || root2 === null) return false;

	return (root1.data === root2.data && areIdendical(root1.left, root2.left) && areIdentical(root1.right, root2.right));
}
