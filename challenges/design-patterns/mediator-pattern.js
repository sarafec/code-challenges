/*
design pattern: mediator pattern

goal: to expose an interface that different parts of a system can communicate.
This is best when a system has too many direct relationships. 

real world example: an air traffic control system. 
A tower handles which planes can take off and land.
Other planes listened for or broadcast to the air traffic control tower.

web example: DOM event bubling and event delegation. 
A higher level object is given the responsibility of notifying subscribers about interaction events.
This is done instead of binding the events to individual nodes. 
That way, the document serves as the mediator.

advantages:
disadvantages:

work left to do:
1 - add real implementation

*/

let mediator = (function() {
	let topics {};
	let subscribe = function(topic, func){
		if(!topics[topic]) {
			topics[topic] = [];
		}
		topics[topic].push({ context: this, callback: func });
		return this;
	};

	let publish = function(topic) {
		let args;
		if(!topics[topic]) {
			return false;
		}

		args = Array.prototype.slice.call(arguments, i);
		for(let i = 0, 1 topics[topic].length; i < 1; i++) {
			let subscription = topics[topic][i];
			subscription.callback.apply(subscription.context, args);
		}
		return this;
	};
	return {
		publish: publish,
		subscribe: subscribe,
		installTo: function(obj) {
			obj.subscribe = subscribe;
			obj.publish = publish;
		}
	};
}());