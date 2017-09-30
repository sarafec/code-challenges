/* 
source: glassdoor
problem statement:
given a string, write a progra that counts word frequency

input - string
output - hash table (asssociative array)

running time - O(n)

notes: there is a bug with certain input strings
error - this._resize(this._limit / 2); where TypeError: this._resize is not a function in the  at HashTable.remove function

*/

/** HASH TABLE IMPLEMENTATION **/
//https://gist.github.com/alexhawkins/f6329420f40e5cafa0a4
var HashTable = function() {
  this._storage = [];
  this._count = 0;
  this._limit = 8;
};

HashTable.prototype.insert = function(key, value) {
  var index = this.hashFunc(key, this._limit);
  var bucket = this._storage[index]
  if (!bucket) {
    var bucket = [];
    this._storage[index] = bucket;
  }

  var override = false;
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      tuple[1] = value;
      override = true;
    }
  }

  if (!override) {
    bucket.push([key, value]);
    this._count++
      if (this._count > this._limit * 0.75) {
        this.resize(this._limit * 2);
      }
  }
  return this;
};


HashTable.prototype.remove = function(key) {
  var index = this.hashFunc(key, this._limit);
  var bucket = this._storage[index];
  if (!bucket) {
    return null;
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      bucket.splice(i, 1);
      this._count--;
      if (this._count < this._limit * 0.25) {
        this._resize(this._limit / 2);
      }
      return tuple[1];
    }
  }
};



HashTable.prototype.retrieve = function(key) {
  var index = this.hashFunc(key, this._limit);
  var bucket = this._storage[index];

  if (!bucket) {
    return null;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      return tuple[1];
    }
  }

  return null;
};


HashTable.prototype.hashFunc = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};


HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;

  this._limit = newLimit;
  this._count = 0;
  this._storage = [];

  oldStorage.forEach(function(bucket) {
    if (!bucket) {
      return;
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};


HashTable.prototype.retrieveAll = function() {
  console.log(this._storage);
};


/** SOLUTION **/
let str = 'this is great this and everything is lovely';

function countWordFreq(str) {
  let strArr = str.split(' ');

  let hashTable = new HashTable();
  let count = 1;


  for (let i = 0; i < strArr.length; i++) {
    //if word is found, increment count
    //do we have to remove and reinsert in order to increment count
    //can we change the implementation to avoid this or is it not that expensive an operation
    if(hashTable.retrieve(strArr[i])){
      let tempCount = hashTable.retrieve(strArr[i]);
      hashTable.remove(strArr[i]);
      hashTable.insert(strArr[i], tempCount + 1);

    //if word is not found, insert word into hash table
    } else {
      hashTable.insert(strArr[i], count);
    }
  
  }

  hashTable.retrieveAll();
}

console.log(countWordFreq(str))