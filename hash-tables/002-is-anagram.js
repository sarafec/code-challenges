/*
source: glassdoor
problem statement:
given a string, determine if it is an anagram

input - two strings
output - boolean

running time - 

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
let str1 = "wolfgang amadeus mozart";
let str2 = "a famous german waltz god";

function isAnagram(str1, str2){

  let strArr1 = str1.split("");
  let strArr2 = str2.split("");

  let hashTable = new HashTable();

  for(let i = 0; i < strArr1.length; i++){
    if(strArr1[i] === " "){
    } else {
       hashTable.insert(strArr1[i], "value");
    }
  }

  for(let j = 0; j < strArr2.length; j++){
    if(strArr2[j] === " "){
    } else if (!hashTable.retrieve(strArr2[j])) {
      console.log(strArr2[j]);
      return false;
    }
  }

  return true;
}

console.log(isAnagram(str1, str2));