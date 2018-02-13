/*

TODOS: 
- Add explaination
- Whiteboard (medium priority)

*/

function Node(data) {
    this.data = data;
    this.isWord = false;
    this.prefixes = 0;
    this.children = {};
}

function Trie() {
    this.root = new Node('');
}

Trie.prototype = {
    countWords: function() {
        if(!this.root) {
            return console.log('No root node found');
        }
        var queue = [this.root];
        var counter = 0;
        while(queue.length) {
            var node = queue.shift();
            if(node.isWord) {
            counter++;
            }
            for(var child in node.children) {
            if(node.children.hasOwnProperty(child)) {
                queue.push(node.children[child]);
            }
            }
        }
        return counter;
    }
};