/*

data structure: queue

methods:
dataStore - storage (as an array) for the queue
enqueue - add item to the queue
dequeue - remove item from the queue
front - pointer to head of queue
back - pointer to tail of the queue
toString - print the queue as a stack
isEmpty - returns a bool whether or not the queue is empty

source: michael mcmillan book

*/

function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.isEmpty = isEmpty;
}

function enqueue(elem) {
	this.dataStore.push(elem);
}

function dequeue() {
	return this.dataStore.shift();
}

function front() {
	return this.dataStore[0];
}

function back() {
	return this.dataStore[this.dataStore.length - 1];
}

function toString() {
	let returnStr = '';
	for(let i = 0; i < this.dataStore.length; i++) {
		returnStr += this.dataStore[i] + '\n';
	}
	return returnStr;
}

function isEmpty() {
	if(this.dataStore.length === 0){
		return true;
	} else {
		return false;
	}
}