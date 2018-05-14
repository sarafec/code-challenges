/*

We'll traverse the tree, starting from the root. For every node we'll check if the left subtree is a leaf. If it is, then add it to the result.
Running time is O(n)

Another option is to pass a sum variable as an accumulator. When a left leaf is encountered, the leaf's data is added to the sum.
Running time is O(n)

*/

// without accumulator
function getLeftLeavesSum(node) {
	let result = 0;
	if (node !== null) {
		if (isLeaf(node.left)) {
			result += node.left.data;
		} else {
			result += getLeftLeavesSum(node.left);
		}
		result += leftLeavesSum(node.right);
	}
	return result;
}

// with accumulator
function getLeftLeavesSumAcc(root) {
	let sum = 0;
	getLeftLeavesSumAccRec(root, 0, sum);
	return sum;
}

function getLeftLeavesSumAccRec(root, isLeft, sum) {
	if (!root) return;
	if (!root.left && !root.right && isLeft === 1) {
		sum += root.key;
	}

	getLeftLeavesSumAccRec(root.left, 1, sum);
	getLeftLeavesSumAccRec(root.right, 0, sum);
}
