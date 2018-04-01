### Trying to Understand Tries
* The word trie comes from retrieval.
* A trie is a tree-like data structure wherein the nodes of the tree store the entire alphabet, and strings/words can be retrieved by traversing down a branch path of the tree.
* THe shape and structure of a trie is always a set of linked nodes, all connecting back to an empty root node. Each node contains an array of poitners (child "nodes"), one for each possible alphabetic value.
* The size of a trie is directly connected/correlated to the size of the alphabet that is being represented.
* Each trie has an empty root node, with links (or references) to other nodes - one for each possible alphabetic value.
* A single node of a trie contains an array of references/links. The character/letter contained at a links is defined by the link's index at the array.
* If we want to remove a key/value pair, we must first find the node for that key and set its value to null. Once the node has a null value, check if its references are null. If they are, we can remove it and repeat/work our way back up the trie.
* One major difference between hash tables and tries is that tries don't need a hash function. Every path to an element will be unique. However, a trie takes up a lot of memory/space with empty null pointers.
* As a trie grows in size, less work must be done to add a value, since the itnermediate nodes, or the branches of the trie have already been built up.
* Each time we add a word's letter, we need to look at 26 references, since there are only 26 possibilities/letters in the alphabet. This number never changes in the context of our trie, so it is a constant value.
* The build of the work in creatign a trie happens  early on.
* The worst-case runtime for creating a trie is O(mn), where m is the length of the longest key in the trie and n is the total number of keys in the trie.
* The worst case running time for searching, inserting, and deleting from a trie is O(an), where a is the length of the word that is being serached and n is the number of total words.
* Example of a trie - autocomplete feature in search engines
* Tries make it easy to serach for a subset of elements since each time we traverse down a branch of a tree, we are cutting out the number of other nodes we need to look at.