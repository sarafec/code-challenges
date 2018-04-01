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
    add: function(data, toNodeData) {
        var node = new Node(data);
        var parent = toNodeData ? this.findBFS(toNodeData) : null;
        if(parent) {
          parent.children.push(node);
        } else {
          if(!this.root) {
            this.root = node;
          } else {
            return 'Root node is already assigned';
          }
        }
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