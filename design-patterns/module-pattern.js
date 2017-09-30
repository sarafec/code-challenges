/*
design pattern: Module Pattern
source: Learning JavaScript Design Patterns p. 29

advantages: 
- it is a cleaner form of encapsulation
- it supports private data
- public parts interface with private parts of your data

disadvantages:
- we access public and private members differently 
- we have to keep them in sync as we refactor our code
- we can't access private members in methods that are added to objects at a later point
- we can't create automate unit tests for private members 

*/

let module = (function() {
	//private variables
	let counter = 0;

	return {

		//public methods
		incrementCounter: function() {
			return counter++;
		},
		resetCounter: function() {
			counter = 0;
		}

	};
})();

//usage
module.incrementCounter();
module.resetCounter();