function Trie() {
	this.root = new Node('');
}

function Node(data) {
	this.data = data;
	this.isWord = false;
	this.prefixes = 0;
	this.children = {};
}

Trie.prototype = {
	add: function(word) {
		if (!this.root) return null;

		this._addNode(this.root, word);
	},
	_addNode: function(node, word) {
		if(!node || !word) {
			return null;
		}

		node.prefixes++;
		let letter = word.charAt(0);
		let child = node.children[letter];

		if(!child) {
			child = new Node(letter);
			node.children[letter] = child;
		}

		var remainder = word.substr(1);
		
		if(!remainder) {
			child.isWord = true;
		}
		this._addNode(child, remainder);
	}
}
