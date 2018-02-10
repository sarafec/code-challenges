// adapted from https://stackoverflow.com/questions/33703019/breadth-first-traversal-of-a-tree-in-javascript
// assumes Tree object exists

Tree.prototype.traverse = function (callback) {
    var queue=[this];
    var n;
  
    while(queue.length>0) {
  
      n = queue.shift();
      callback(n.value);
  
      if (!n.children) {
        continue;
      }
  
      for (var i = 0; i< n.children.length; i++) {
         queue.push(n.children[i]);
      }
    }
  };