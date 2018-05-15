/*

If we are allowed extra space, we can simply move all items of the queue to an array, then sort the array and finally move array elements back to the queue.

To do this without extra space, we'll find the next minimum element on every pass through the queue.
To do this, we'll dequeue and enqueue elements until we find the next minimum. After we find the minimum's index, we dequeue and enqueue elements from the queue except for the minimum. After we finish this traversal, we insert the minimum to the rear of the queue. 
We do this until all minimums are pushed to the rear. 
We will repeat this method n time. 

Running time O(n^2)

*/

function sortQueue (queue) {
	for (let i = 1; i <= queue.size(); i++) {
		let minIndex = findMinIndex(queue, queue.size() - i);
		insertMinToRear(queue, minIndex);
	}
}

function findMinIndex(queue, sortIndex) {
	let minIndex = -1,
		minVal = Number.MAX_SAFE_INTEGER,
		size = queue.size();
	for (let i = 0; i < size; i++) {
		let current = queue.dequeue();
		if (current <= minVal && i <= sortIndex) {
			minIndex = i;
			minVal = current;
		}
		queue.enqueue(current);
	}
	return minIndex;
}

function insertMinToRear(queue, minIndex) {
	let minVal = 0;
	let size = queue.size();
	for (let i = 0; i < size; i++) {
		let current = queue.dequeue();
		if (i !== minIndex) {
			queue.enqueue(current);
		} else {
			minVal = current;
		}
	}
	queue.enqueue(minVal);
}
