/*

A tree is balanced if the difference between the heights of left and right subtree is not more than 1. 

To check if a tree is height-balanced, get the height of left and right subtrees. Return true if the difference between heights is not more than 1 and left and right subtrees are balanced, otherwise return false.
The running time for this solution is O(n^2)

We can optimize that solution by calculating the height in the same recursion rather than calling a height function separately.
The running time is reduced to O(n).

We'll implement the optimized solution.

*/

Class Height {
	constructor() {
		this.height = 0;
	}
}

function isBalanced(root, height) {
	if (root === null) {
		height.height = 0;
		return true;
	}

	let leftHeight = new Height(),
		rightHeight = new Height(),
		left = isBalanced(root.left, leftHeight),
		right = isBalanced(root.right, rightHeight),
		leftHeightVal = leftHeight.height,
		rightHeightVal = rightHeight.height;

	height.height = (leftHeightVal > rightHeightVal ? leftHeightVal : rightHeightVal) + 1;

	if ((leftHeightVal - rightHeightVal >= 2) || (rightHeightVal - leftHeightVal >= 2)) {
		return false;
	} else {
 	return left && right;
}
}

// not used in solution
function getHeight(node) {
	if (node === null) return 0;
	return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}
