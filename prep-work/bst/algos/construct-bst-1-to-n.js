/*

All nodes in the left subtree are smaller than the root and in the right subtree are larger than the root. So if we have the ith number as the root, all numbers from 1 to i - 1 will be in the left subtree and i + 1 to n will be in the right subtree. 
If 1 to i-1 can for x different trees and i + 1 to n can from y different trees than we will have x * y total trees when ith number is the root and we have n choices for the root. 
We can iterate from 1 to n for the root and another loop for left and right subtree. 
The count is the nth Catalan number.

Catalan numbers are a sequence of natural numbers that occur in interesting counting problems.


The idea is to maintain a list of roots of all bsts, recursively construct all possible left and right subtrees. We'll create a tree for every pair of left and right subtrees and add the tree to the list.

*/

function constructTrees(start, end) {
	const list = [];
	if (start > end) {
		list.push(null); 
		return list;
	}
	for (let i = start; i <= end; i++) {
		let leftSubtree = constructTrees(start, i - 1);
		let rightSubtree = constructTrees(i + 1, end);

		for (let j = 0; j < leftSubtree.length(); i++) {
			let left = leftSubtree[j];
			for (let k = 0; k < rightSubtree.length; k++) {
				let right = rightSubtree[k];
				let node = newNode(i);
				node.left = left;
				node.right = right;
				list.push(node);
			}
		}
	}
	return list;
}
