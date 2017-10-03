/*

data structure: stack

methods: 
dataStore - storage (as an array) for the stack
top - pointer to the head of the stack
push - add a new entry onto the stack
pop - remove the top entry from the stack
peek - returns the first item in the stack without popping it off the stack
clear - empty the stack
length - returns number of entries in stack

source: michael mcmillan book

*/

function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}

function push(elem) {
	this.dataStore[this.top++] = elem;
}

function peek() {
	return this.dataStore[this.top - 1];
}

function pop() {
	return this.dataStore[this.top--];
}

function clear() {
	this.top = 0;
	this.dataStore.length = 0;
}

function length() {
	return this.top;
}