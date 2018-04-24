/* Sum of All Elements of N-ary Tree */

/*

Explanation: Use level order traversal, similar to what you would use with binary tree.
Start by pushing the root node to the queue. For each node, pop from the queue and add the value
to the sum variable. Then, push the children of the popped element to the queue.

Running Time: O(n), where n is the number of nodes in the tree
Space Complexity: O(n)

*/

function Node(data) {
	this.data = data;
	this.children = [];
}

funciton sumElements(root) {
	let sum = 0;
	if (root === null) return 0;

	const queue = new Queue();
	queue.enqueue(root);

	while(!queue.empty()) {
		const size = queue.size();
		while (size > 0) {
			let poppedElem = queue.dequeue();
			sum += poppedElem.data;

			for (let i = 0; i < poppedElem.children.size(); i++) {
				queue.enqueue(poppedElem.children[i]);
			}
			size--;
		}
	}
	return size;
}