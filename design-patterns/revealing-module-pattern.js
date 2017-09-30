/*
design pattern: Revealing Module Pattern
source: Learning JavaScript Design Patterns p. 37

advantages:
- easier to tell which methods and functions are publically accessible

disadvantages: 
- when refactoring if a private fucntion refers to a public function that public function can't be overriden by way of the private function

*/

let revealingModule = function() {
	let privateCounter = 0;

	function privateFunction() {
		privateCounter++;
	}

	function publicFunction() {
		publicIncrement();
	}
	function publicIncrement() {
		privateFunction();
	}

	function publicGetCount() {
		return privateCounter;
	}

	return {
		start: publicFunction,
		increment: publicIncrement,
		count: publicGetCount
	};
}();

revealingModule.start();