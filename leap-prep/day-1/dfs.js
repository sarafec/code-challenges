// Adapted from https://stackoverflow.com/questions/33703019/breadth-first-traversal-of-a-tree-in-javascript
// assumes Tree object exists

Tree.prototype.traverse = function (callback) {
    var stack=[this];
    var n;
  
    while(stack.length>0) {
  
      n = stack.pop();
      callback(n.value);
  
      if (!n.children) {
        continue;
      }
  
      for (var i = n.children.length-1; i>=0; i--) {
         stack.push(n.children[i]);
      }
    }
  };