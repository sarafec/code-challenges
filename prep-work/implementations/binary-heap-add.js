function BinaryHeap(scoreFunction) {
	this.content = [];
	this.scoreFunction = scoreFunction;
}

BinaryHeap.prototype = {
	push: function(element) {
		this.content.push(element);
		this.bubbleUp(this.content.length - 1)
	}, 
	bubbleUp: function(n) {
		let 	element = this.content[n], 
		score = this.scoreFunction(element);

		while (n > 0) {
			let 	parentN = Math.floor((n + 1) /2) - 1,
				parent = this.content[parentN];

			if (score >= this.scoreFunction(parent)) break;

			this.content[parentN] = element;
			this.content[n] = parent;
			n = parentN;
		}
	}
};
