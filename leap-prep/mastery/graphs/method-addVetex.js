/*

TODOS: 
- Add explaination
- Whiteboard (low priority)

*/

function Graph() {
    this.vertices = [];
    this.edges = [];
    this.numberOfEdges = 0;
}

Graph.prototype = {
    addVertex: function(vertex) {
        this.vertices.push(vertex);
        this.edges[vertex] = [];
    },

    addEdge: function(vertex1, vertex2) {
        this.edges[vertex1].push(vertex2);
        this.edges[vertex2].push(vertex1);
        this.numberOfEdges++;
    }
}