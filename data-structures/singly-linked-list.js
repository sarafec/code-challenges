/*

data structure: singly linked list

methods:
head - pointer to the head of the linked list
addItem - add item to list
findItem - find item in list
removeItem - remove item from the linked list by traversing the list
size - return number of items in linked list
toArray - return linked list as array
toString - return linked list as string

source: nicholas c. zakas github

*/

function LinkedList() {
	this.head = null;
	this.addItem = addItem;
	this.findItem = findItem;
	this.removeItem = removeItem;
	this.size = size;
	this.toArray = toArray;
	this.toString = toString;
}

function addItem(data) {
	//create a new item object, place data in
	let node = { data: data, next: null },
	//used to traverse the structure
		current;
    
	//edge case - no items in the list yet
	if (this._head === null) {
		this._head = node;
	} else {
		current = this._head;
		while(current.next) {
			current = current.next;
		}
		current.next = node;
	}
}

function findItem(index) {
	//check for out-of-bounds values
	if (index > -1){
		let current = this._head,
			i = 0;
		while(i++ < index && current) {
			current = current.next;
		}
		return (current ? current.data : null);
	} else {
		return null;
	}
}

function removeItem(index) {
	//check for out-of-bounds values
	if (index > -1){
		let current = this._head,
			previous,
			i = 0;
		//special case: removing first item
		if (index === 0){
			this._head = current.next;
		} else {
			//find the right location
			while(i++ < index){
				previous = current;
				current = current.next;
			}
			//skip over the item to remove
			previous.next = current.next;
		}
		//return the value
		return (current ? current.data : null);
	} else {
		return null;
	}
}

function size() {
	let current = this._head,
		count   = 0;
	while(current) {
		count++;
		current = current.next;
	}
	return count;
}

function toArray(){
	let result = [],
		current = this._head;
	while(current){
		result.push(current.data);
		current = current.next;
	}
	return result;
}

function toString() {
	return this.toArray().toString();
}