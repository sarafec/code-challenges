function BinaryHeap(scoreFunction) {
	this.content = [];
	this.scoreFunction = scoreFunction;
}

BinaryHeap.prototype = {
	remove: function(node) {
		for (let i = 0; i < content.length; i++) {
			if (this.content[i] !== node) continue;
			var end = this.content.pop();
			if (i === length -1) break;
			this.content[i] = end;
			this.bubbleUp(i);
			this.sinkDown(i);
			break;
		}
	},

	pop: function() {
		let result = this.content[0];
		let end = this.content.pop();
		if (this.content.length > 0) {
			this.content[0] = end;
			this.sinkDown(0);
		}
		return result;
	},

	bubbleUp: function(n) {
		let	element = this.content[n],
			score = this.scoreFunction(element);

		while (n > 0) {
			let	parentN = Math.floor((n + 1) /2) - 1),
				parent = this.content[parentN];

			if (score >= this.scoreFunction(parent)) break;

			this.content[parentN] = element;
			this.content[n] = parent;
			n = parentN;
		}
	},
	sinkDown: function(n) {
		let	length = this.content.length,
			element = this.content[n],
			elemScore = this.scoreFunction(element);

		while (true) {
			let	child2N = (n + 1) * 2,
				child1N = child2N - 1;

			let swap = null;
			if (child1N < length ) {
				let	child1 = this.content[child1N],
					child1Score = this.scoreFunction(child1);
				
				if (child1Score < elemScore) swap = child1N;
			}
			if (child2N < length) {
				let	child2 = this.content[child2N],
					child2Score = this.scoreFunction(child2);
				if (child2Score < (swap === null ? elemScore : child1Score)) swap = child2N;
			}

			if (swap === null) break;
			this.content[n] = this.content[swap];
			n = swap;
		}
	}
};
