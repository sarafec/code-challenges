/*

A binary heap is a binary tree that is a complete tree and its root is always either the max or min value.
A binary heap is typically represented as an array. THe root element is at arr[0]. 

Parent node (from the child node) - arr[(i-1)/2]
Left child node (from parent node) - arr[(2*i) + 1]
Right child node (from parent node) - arr[(2*i)+2]

Use bfs traversal to achieve array representation.

Methods on a min heap - 
getMin() - returns the root element, time complexity O(1)
extractMin() - removes min element, time complexity O(log n)
-- In order to maintain the heap property, we'll call heapify after removing the root
decreaseKey() - decrease the value of key, time complexity O(log n)
-- If the decreased key value of a node is greater than the parent of the node, we don't do anything. Otherwise, we need to heapify to fix the violated heap property.
insert() - insert a new key, time complexity O(log n)
-- We add a new key at the end of the tree. If the new key is greater than its parent, then we don't need to do anything. Otherwise, we need to heapify to fix the violated heap property.
delete() - delete a new key, time complexity O(log n)
-- We replace the key to be deleted with infinity by calling decreaseKey(), after decreasing the key, we call extractMin() to remove key.


Assume heapPush and heapPop are implemented elsewhere.
heapPop - pops and returns the smallest element form the heap
heapPush - push the value item onto the heap, maintaining the heap invariant

*/

class MinHeap {
	constructor() {
		this.heap = [];
	}

	getParent(i) {
		return (i-1)/2;
	};

	insertKey(k) {
		heapPush(this.heap, k);
	}
	
	decreaseKey(i, newVal) {
		this.heap[i] = newVal;
		while (i !== 0 && this.heap[this.getParent(i)] > this.heap[i]) {
			let temp = this.heap[i];
			this.heap[i] = this.heap[this.getParent(i)];
			this.heap[this.getParent(i)] = temp;
		}
	}

	extractMin() {
		return heapPop(this.heap);
	}

	deleteKey(i) {
		this.decreaseKey(i, Number.NEGATIVE_INFINITY);
		this.extractMin();
	}

	getMin() {
		return this.heap[0];
	}
}

/* implementation of minHeapify */
function minHeapify(i) {
	let left = (2*1) + 1;
	let right = (2*1) + 2;
	let smallest = i;
	if (left < heapSize && heapArr[left] < heapArr[i]) {
		smallest = left;
	}
	if (right < heapSize && heapArr[right] < heapArr[smallest]) {
		smallest = right;
	}
	if (smallest !== i) {
		swap(heapArr[i], heapArr[smallest]);
		minHeapify(smallest);
	}
}
