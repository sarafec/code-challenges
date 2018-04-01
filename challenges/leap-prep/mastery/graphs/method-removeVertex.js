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
    removeVertex: function(vertex) {
        var index = this.vertices.indexOf(vertex);
        if(~index) {
          this.vertices.splice(index, 1);
        }
        while(this.edges[vertex].length) {
          var adjacentVertex = this.edges[vertex].pop();
          this.removeEdge(adjacentVertex, vertex);
        }
    },

    removeEdge: function(vertex1, vertex2) {
        var index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
        var index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;
        if(~index1) {
          this.edges[vertex1].splice(index1, 1);
          this.numberOfEdges--;
        }
        if(~index2) {
          this.edges[vertex2].splice(index2, 1);
        }
    }
}