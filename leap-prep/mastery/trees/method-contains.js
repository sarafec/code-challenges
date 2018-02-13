/*

TODOS: 
- Add explaination
- Whiteboard (medium priority)

*/

function Node(data) {
    this.data = data;
    this.children = [];
}
  
function Tree() {
    this.root = null;
}

Tree.prototype = {
    contains: function(data) {
        return this.findBFS(data) ? true : false;
    },

    findBFS: function(data) {
        var queue = [this.root];
        while(queue.length) {
          var node = queue.shift();
          if(node.data === data) {
            return node;
          }
          for(var i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
          }
        }
        return null;
    }
};