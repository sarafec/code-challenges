/*

data structure: doubly linked list

methods:
head - pointer to head of linked list
tail - pointer to tail of linked list
addItem - add data to the end of the list
findItem - given an index, retrieve the item
removeItem - given an index, remove the item
size - return the number of entries in the linked list
toArray - return linked list as array
toString - return linked list as string

source: nicholas c. zakas github

*/

function DoublyLinkedList() {
	this.head = null;
	this.tail = null;
	this.length = 0;
}

function addItem(data) {
	//create a new item object, place data in
	let node = { data: data, next: null, prev: null };

	//special case: no items in the list yet
	if (this.length === 0) {
		this.head = node;
		this.tail = node;
	} else {
		//attach to the tail node
		this.tail.next = node;
		node.prev = this.tail;
		this.tail = node;
	}

	//update the count
	this.length++;
}

function findItem(index) {
	//check for out-of-bounds values
	if (index > -1 && index < this.length){
		let current = this.head,
			i = 0;
		while(i++ < index) {
			current = current.next;
		}
		return current.data;
	} else {
		return null;
	}
}

function removeItem(index) {
	//check for out-of-bounds values
	if (index > -1 && index < this.length) {
		let current = this.head,
			i = 0;

		//special case: removing first item
		if (index === 0) {
			this.head = current.next;
			/*
			* If there's only one item in the list and you remove it,
			* then this.head will be null. In that case, you should
			* also set this.tail to be null to effectively destroy
			* the list. Otherwise, set the previous pointer on the new
			* this.head to be null.
			*/
			if (!this.head) {
				this.tail = null;
			} else {
				this.head.prev = null;
			}

		//special case: removing last item
		} else if (index === this.length - 1) {
			current = this.tail;
			this.tail = current.prev;
			this.tail.next = null;
		} else {
			//find the right location
			while(i++ < index) {
				current = current.next;
		}
		//skip over the item to remove
		current.prev.next = current.next;
		current.next.prev = current.prev;
	}
		//decrement the length
		this.length--;
		//return the value
		return current.data;
	} else {
		return null;
	}
}

function size() {
	return this.length;
}
    
function toArray() {
	let result = [],
		current = this.head;
	while(current) {
		result.push(current.data);
		current = current.next;
	}
	return result;
}

function toString() {
	return this.toArray().toString();
}