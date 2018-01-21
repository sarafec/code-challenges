/*

data structure: hash table

methods:
hash - takes in a key and returns a bucket number used as an index for a key
insert - insert or update a node given a key
get - retrieve an entry given its keu
retrieveAll - retrieve all entries in the hash table as an array

source: mega0319 github

*/

function HashTable(size) {
	this.buckets = Array(size);
	this.numBuckets = this.buckets.length;
}

// constructor for hash node
function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
	let total = 0;
	for (let i = 0; i < key.length; i++) {
		total += key.charCodeAt(i);
	}
	let bucket = total % this.numBuckets;
	return bucket;
};

HashTable.prototype.insert = function(key, value) {
	let index = this.hash(key);
	if (!this.buckets[index]) {
		this.buckets[index] = new HashNode(key, value)
	} else if (this.buckets[index].key === key) {
		this.buckets[index].value = value;
	} else {
		let currentNode = this.buckets[index];
		while (currentNode.next) {
			if (currentNode.next.key === key){
				currentNode.next.value = value;
				return;
			}
		currentNode = currentNode.next;
	}
	currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.get = function(key) {
	let index = this.hash(key);
	if (!this.buckets[index]) {
		return null;
	}
	let currentNode = this.buckets[index];
	while (currentNode) {
		if (currentNode.key === key) {
			return currentNode.value;
		}
		currentNode = currentNode.next;
	}
  return null;
};

HashTable.prototype.retrieveAll = function() {
	let allNodes = [];
	for (let i = 0; i < this.numBuckets; i++) {
		let currentNode = this.buckets[i];
		while (currentNode) {
			allNodes.push(currentNode);
			currentNode = currentNode.next;
		}
	}
	return allNodes;
};
