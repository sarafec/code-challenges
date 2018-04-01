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
    traverseBFS: function(vertex, fn) {
        if(!~this.vertices.indexOf(vertex)) {
          return console.log('Vertex not found');
        }
        var queue = [];
        queue.push(vertex);
        var visited = [];
        visited[vertex] = true;
      
        while(queue.length) {
          vertex = queue.shift();
          fn(vertex);
          for(var i = 0; i < this.edges[vertex].length; i++) {
            if(!visited[this.edges[vertex][i]]) {
              visited[this.edges[vertex][i]] = true;
              queue.push(this.edges[vertex][i]);
            }
          }
        }
    }
};