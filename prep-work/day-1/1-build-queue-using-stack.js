/* Implement a Stack using a Single Queue */

/*

Explanation: Keep the newly inserted element at the front, keeping the ordering of previous elements the same

Running Time: O(1) for pop, O(n) for push


*/

const queue = new Queue();

function push(val) {
	const size = queue.size();
	queue.enqueue(val);

	for (let i = 0; i < size; i++) {
		let x = queue.dequeue();
		queue.enqueue(x);
	}
}

function pop() {
	if (queue.isEmpty()){
		console.log("No elements in queue")
	}

	let x = queue.dequeue();
	return x;
}