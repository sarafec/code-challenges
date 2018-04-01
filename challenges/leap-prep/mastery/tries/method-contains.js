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
    contains: function(word) {
        if(!this.root) {
            return false;
        }
        return this._contains(this.root, word);
    },

    _contains: function(node, word) {
        if(!node || !word) {
            return false;
        }
        var letter = word.charAt(0);
        var child = node.children[letter];
        if(child) {
            var remainder = word.substring(1);
            if(!remainder && child.isWord) {
                return true;
            } else {
                return this._contains(child, remainder);
            }
        } else {
            return false;
        }
    }
};