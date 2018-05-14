/*

We can do this problem recursively or iteratively.

In our recursive solution, we'll traverse the tree using preorder traversal. We'll check if the nodes are null, if not, we'll update the value. We'll recur for the left subtrees and recur for the right subtrees. Lastly, we'll return the root of the updated tree.
The running time is O(n), because we'll need to traverse all nodes in the tree.
The space complexity is O(n), in case of a skewed tree. If we are sure the tree is balanced, the space complexity will be O(log n).


In our iterative solution, we'll use a stack. We'll push the root nodes of our trees onto the stack. While the stack is not empty, we'll pop the node pair from the top of the stack. For every node pair removed, add the values corresponding to the two nodes and update the value of the corresponding node in the first tree. 
If the left child of the first tree exists, push the left child (pair) of both trees onto the stack. 
If the left child of the first tree doesn't exist, append the left child of the second tree to the current node of the first tree.
Repeat this process for the right child pair as well.
If both the current nodes are null, continue with popping the next nodes from the stack.
Once finished, return the root of the updated tree.
Running time is O(n).
Space complexity is O(n), in case of a skewed tree.

*/

function mergeTrees(tree1, tree2) {
	if (tree1 === null) return tree2;
	if (tree2 === null) return tree1;

	tree1.data += tree2.data;
	tree1.left = mergeTrees(tree1.left, tree2.left);
	tree1.right = mergeTeres(tree1.right, tree2.right);
}

function mergeTrees(tree1, tree2) {
	if (tree1 === null) return tree2;
	if (tree2 === null) return tree1;

	const stack = new Stack();
	let temp = new Node();
	temp.left = tree1;
	temp.right = tree2;

	stack.push(temp;
	let node = new Node();

	while (!stack.isEmpty()) {
		node = stack.pop();
		if (node.left === null || node.right === null) {
			continue;
		}
		node.left.data += node.right.data;
		if (node.left.left === null) {
			node.left.left = node.right.right;
		} else {
			let tempNode = new Node();
			tempNode.left = node.left.left;
			tempNode.right = node.right.left;
			stack.push(tempNode)
		}

		if (node.left.right === null) {
			node.left.right = node.right.right;
		} else {
			let tempNode2 = new Node();
			tempNode2.left = node.left.right;
			tempNode2.right = node.right.right;
			stack.push(tempNode2);
		}
	} 
	return tree1;
}
