/*

We'll use level order traversal (bfs) using two queues. We'll start by pushing the root node into the queue. Then remove a node from the front of the queue.

For every node removed from the queue, we'll push all of its children into the second temp queue.

We'll keep popping nodes from the queue and adddings its children until the queue becomes empty.

Every time the queue becomes empty, it indicates that one level of the tree has been considered. While pushing the nodes into the temp queue, keep track of the sum of the nodes along with the number of nodes push. That will make us able to find the average of the nodes at each level (by make use of the sum and count).

After each level has been considered, again initialize the queue and temp queue until both queues become empty.

Running time is O(n).
Space complexity is O(n), because the size of queues can grow up to the max number of nodes at any level in the given tree. Here, n refers t the max number of nodes at any level in the input tree.

*/

function findAvgOfLevels(root) {
	const result = [];
	const queue = new Queue();
	queue.enqueue(root);
	
	// traverse by level
	while(!queue.isEmpty()) {

		// compute sum of nodes
		// and count nodes in current level
		const tempQueue = new Queue();
		let	sum = 0,
			count = 0;

		while(!queue.isEmpty()) {
			let node = queue.dequeue();
			sum += node.val;
			count++;

			if (node.left !== null) {
				tempQueue.enqueue(node.left);
			}

			if (node.right !== null) {
				tempQueue.enqueue(node.right);
			}
		}
		queue = tempQueue;
		console.log(sum * 1.0 / count);
	}
}
