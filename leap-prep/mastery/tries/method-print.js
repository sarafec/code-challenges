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
            for(var child in node.children) {
            if(node.children.hasOwnProperty(child)) {
                queue.push(node.children[child]);
            }
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
            for(var child in node.children) {
            if(node.children.hasOwnProperty(child)) {
                queue.push(node.children[child]);
            }
            }
        }
        console.log(string.trim());
    }
};