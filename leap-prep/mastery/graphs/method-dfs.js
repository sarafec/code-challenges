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
    traverseDFS: function(vertex, fn) {
        if(!~this.vertices.indexOf(vertex)) {
          return console.log('Vertex not found');
        }
        var visited = [];
        this._traverseDFS(vertex, visited, fn);
    },

    _traverseDFS: function(vertex, visited, fn) {
        visited[vertex] = true;
        if(this.edges[vertex] !== undefined) {
          fn(vertex);
        }
        for(var i = 0; i < this.edges[vertex].length; i++) {
          if(!visited[this.edges[vertex][i]]) {
            this._traverseDFS(this.edges[vertex][i], visited, fn);
          }
        }
    }
};