/*

Assuming we can get the size of the queue at any point, we'll keep our newly inserted element at the front. We'll keep the order of the previous elements the same.

*/

class Stack {
	constructor() {
		this.queue = [];
	}
	
	enqueue (val) {
		let size = this.queue.length;
		this.queue.push(val);
		for (let i = 0; i < size; i++) {
			let x = this.queue.pop();
			this.queue.push(x);
		}
	}
	
	
	pop () {
		if (this.queue.isEmpty()) {
			console.log("Queue has no elements");
			return -1;
		}
		let x = this.queue.pop();
		return x;
	}

	top () {
		if (this.queue.isEmpty()) {
			return -1;
		}
		return this.queue[0];
		
	}

	isEmpty() {
		return this.queue.length === 0;
	}
}
