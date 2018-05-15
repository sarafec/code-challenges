/*

To delete a node from a trie use recursion.
Here are the conditions when deleting a key - 
-- Key may not be in the trie. If so, don't modify the trie.
-- Key may be a unique key (no part of the ky contains a another key). In that case, delete all the nodes.
-- Key may be a prefix key of another key in the trie. Unmark the leaf node.
-- Key may be present in trie, having at least one other key as prefix key. Delete nodes from end of key until first leaf node of longest prefix key.

*/

function deleteKey(key) {
	let length = key.length;
	if (key > 0) {
		_deleteHelper(this.root, key, 0, length);
	}
}

function _deleteHelper(pNode, key, level, length) {
	if (pNode) {
		if (level === length) {
			if (pNode.value) {
				pNode.value = 0;
			}
			return pNode.isItFreeNode();
		} else {
			index = this._index(key[level]);
			if (_deleteHelper(pNode.children[index], key, level + 1, length)) {
				pNode.children = pNode.children.splice(index);
				return (!pNode.leafNode && pNode.isItFreeNode());
			}
		}
	}
	return false;
}
