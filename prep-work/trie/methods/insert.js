/*

Tries are an efficient information retrieval data structure.
Using a trie, search complexities can be brought down.

Every node of a trie consists of multiple branches. Each branch represents a possible character of keys. We need to mark the last node of every key as the end of word node. A trie node uses isEndOfWord to distinguish the node as the end of word node.

Every character of input is inserted as an individual trie node.
The children is an array of pointers to the next level trie nodes. The key character acts as an index into the array children. If the input key is new or an extension of an existing key, we need to construct non-existing nodes of the key, and mark end of word for last node.
If the input key is a prefix of existing key in Trie, we simply mark the last node of the key as end of word. 

Searching for a key is similar to insert, however, we only compare the character and move down. The search terminates when it reaches the end of the string or if there is a lack of that key in the trie.

The time complexity of insert and search is O(keyLength)
The space complexity of a trie is O(alphabetSize * keyLength * n), where n is the number of keys in the trie.

More efficient representations of trie nodes include compressed tries, ternary search tree, and more.

*/

class TrieNode {
	constructor() {
		this.alphabetSize = 26;
		this.children = Array(26);
		thils.children.fill(null);
		this.isEndOfWord = false;
	}
}

class Trie {
	constructor() {
		this.root = null;
	}

	insert (key) {
		let	level,
			length = key.length,
			index,
			pCrawl = this.root;

		for (level = 0; level < length; level++) {
			index = key.charCodeAt(level) - 'a'.charCodeAt(0);
			if (pCrawl.children[index] === null) {
				pCrawl.children[index] = new TrieNode();
			}
			pCrawl = pCrawl.children[index];
		}
		pCrawl.isEndOfWord = true;
	}

	search (key) {
		let	level,
			length = key.length;
			index,
			pCrawl = this.root;
		for (level = 0; level < length; level++) {
			index = key.charCodeAt(level) - 'a'.charCodeAt(0);
			if(pCrawl.children[index] === null) {
				return false;
			}
			pCrawl = pCrawl.children[index];
		}
		return (pCarwl !== null && pCrawl.isEndOfWord);
	}
}


