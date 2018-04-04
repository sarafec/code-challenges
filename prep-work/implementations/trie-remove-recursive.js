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
	remove: function(word) {
		if(!this.root) return;
		if(this.contains(word)) this._removeNode(this.root, word);
	},
	_removeNode: function(node, word) {
		if (!node || !word) return;

		node.prefixes--;
		let letter = word.charAt(0);
		let child = node.children[letter];
		if (child) {
			let remainder = word.substr(1);
			if (remainder) {
				if (child.prefixes === 1) {
			delete node.children[letter];		
		} else {
			this._removeNode(child, remainder);
		}
				} else {
					if (child.prefixes === 0) {
						delete node.children[letter];
					} else {
						child.isWord = false;
					}
				}
			}
		}
};
