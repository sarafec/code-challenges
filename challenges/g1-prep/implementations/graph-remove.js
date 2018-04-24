function Graph() {
	this.vertices = [];
	this.edges = [];
	this.numberOfEdges = 0;
}

Graph.prototype = {
	removeVertex: function(vertex) {
		let index = this.vertices.indexOf(vertex);
		if(~index) {
			this.vertices.splice(index, 1);
		}
		while(this.edges[vertex].length) {
			let adjacentVertex = this.edges[vertex].pop();
			this.removeEdge(adjacentVertex, vertex);
		}
	},
	removeEdge: function(vertex1, vertex2) {
		let index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
		let index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;

		if (~index1) {
			this.edges[vertex1].splice(index1, 1);
			this.numberOfEdges--;
		}
		if (~index2) {
			this.edges[vertex2].splice(index2, 1);
		}
	}
}
