/*

We'll dequeue the element from the queue, if the queue has elements. We'll then call our reverseQueue function for the rest of the queue.
Then, we'll push the popped element in the reversed queue.

*/

function reverseQueue(queue) {
	if (queue.isEmpty()) return queue;

	// dequeue current item
	let data = queue.dequeue();
	
	// reverse remaining queue
	queue = reverseQueue(queue);
	
	// enqueue current item in the rear
	queue.enqueue(data);
	return queue
};