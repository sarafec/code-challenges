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
    },

    _preOrder: function(node, fn) {
        if(node) {
          if(fn) {
            fn(node);
          }
          for(var i = 0; i < node.children.length; i++) {
            this._preOrder(node.children[i], fn);
          }
        }
    },

    _postOrder: function(node, fn) {
        if(node) {
          for(var i = 0; i < node.children.length; i++) {
            this._postOrder(node.children[i], fn);
          }
          if(fn) {
            fn(node);
          }
        }
    },

    traverseDFS: function(fn, method) {
        var current = this.root;
        if(method) {
          this['_' + method](current, fn);
        } else {
          this._preOrder(current, fn);
        }
    },

    traverseBFS: function(fn) {
        var queue = [this.root];
        while(queue.length) {
          var node = queue.shift();
          if(fn) {
            fn(node);
          }
          for(var i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
          }
        }
    },

    print: function() {
        if(!this.root) {
          return console.log('No root node found');
        }
        var newline = new Node('|');
        var queue = [this.root, newline];
        var string = '';
        while(queue.length) {
          var node = queue.shift();
          string += node.data.toString() + ' ';
          if(node === newline && queue.length) {
            queue.push(newline);
          }
          for(var i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
          }
        }
        console.log(string.slice(0, -2).trim());
      },

      printByLevel: function() {
        if(!this.root) {
          return console.log('No root node found');
        }
        var newline = new Node('\n');
        var queue = [this.root, newline];
        var string = '';
        while(queue.length) {
          var node = queue.shift();
          string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
          if(node === newline && queue.length) {
            queue.push(newline);
          }
          for(var i = 0; i < node.children.length; i++) {
            queue.push(node.children[i]);
          }
        }
        console.log(string.trim());
      }
};