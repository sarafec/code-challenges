### BaseCS: Taking Hash Tables Off the Shelf
* Hash tables are made up of two parts - an array and a has function. THe array holds the data and the hash function decides where our data will live.
* Hash tables are made up of a set of pairs - a key and a value (k, v). That way you have the key in one set of data so you can find the value that corresponds to it in another set of data.
* The hash function creates the mapping. THe key is the index of the array, and the value is the data that lives at that array. The hash function takes an item as an input, calculates, and return sthe key for where that item should live in the hash table.
* A collision in a hash table occurs when two elements are supposed to be inserted at the same place (hash bucket) in an array.
* Metaphor for a hash table - a phone book is grouped into 26 buckets, one for each letter. 
* An important part of a good hash algo is having an equal distribution of data amongst all the possible hash buckets.
* Often when you're searching for an item usign an array, linked list, stack or queue you'll end up usign linear time.
* We'll lean on the hash function to determine where to locate, add, or remove something making all our look ups/removals O(1).