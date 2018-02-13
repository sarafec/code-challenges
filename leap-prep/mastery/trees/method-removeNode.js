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
    remove: function(data) {
        if(this.root.data === data) {
          this.root = null;
        }
        var queue = [this.root];
        while(queue.length) {
          var node = queue.shift();
          for(var i = 0; i < node.children.length; i++) {
            if(node.children[i].data === data) {
              node.children.splice(i, 1);
            } else {
              queue.push(node.children[i]);
            }
          }
        }
    }
};