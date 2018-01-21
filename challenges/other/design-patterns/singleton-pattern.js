/*
design pattern: Singleton Pattern
source: Learning JavaScript Design Patterns p. 39

Singletons are useful when exactly one object is needed to coordinate others across a system.

note: the presence of the Singleton is often an indication that modules in a system 
are tightly coupled or that logic is overly spread across multiple parts of the code base.
Singletons are difficult to test due to hidden dependences, difficulty in creating multiple instances,
and difficulty in stubbing dependencies.
Consider refactoring.
*/

let singleton = (function() {
	let instance;
	function init() {
		//private methods and variables
		function privateMethod() {
			console.log('Hi, I\'m private.');
		}
		let privateVar = 'I am a private variable.';
		let privateRandNum = Math.random();
		
		return {

			//public methods and variables
			publicMethod: function() {
				console.log('Hi, I\'m public');
			},

			publicProperty: 'I am a public variable.',

			getRandNum: function() {
				return privateRandNum;
			}
		};
	}

	return {
		//get the singleton instance if one exists
		//create it if it doesn't
		getInstance: function() {
			if (!instance) {
				instance = init();
			}
			return instance;
		}
	};
})();