### BaseCS: Hashing Out Hashing Functions
* Hash tables are a really great option for storing and retrieving specific data. 
* Hash tables are made up of two parts - an array that stores all of the data that we're hashing, and the hash function that decides where all of that data will go.
* The usefulness of a hash table is tied to its hash function. 
* What makes a good hash table? It should be easy to compute. It should avoid collisions. It should use all the input data, and always return the same key for the same hash bucket per value.
* Collisions occur whenever a hash table's hashing function generates the same index for more than one key.
* Collisions are unavoidable, but more collisions, the harder it is to come up with a fast, efficient algorithm for resolving them.
* How to handle collisions in a hash function depends on your dataset, the size of your hash table and what operations you know you'll want to perform on the table later on.
* Collision Handling method #1 Linear Probing - look for the next empty hash bucket. 
* In linear probing, if a collision occurs and two elements are determiend to live at the same spot in a hash table, a hash function can simply go to the next empty bucket and add the element there. It will even cycle back if necessary. This is called rehashing.
* A downside to linear probing - the tendency for clustering.
*  Any hash table that doesn't use up the entire hash table range will eventually end up with clustering on one end of the table.
* Hash functions that don't spread data evenly across buckets will add data to one part of the table, which will lead to clustering. 
* Collision Handling method #2 Chaining - instead of storing a single item at each hash bucket, we can chain multiple elements together so taht each key of the table has a poitner that references a linked list.
* One downside to chaining is that it takes more time to search with more items at one location, or O(n), whre n is the number of items in the hash bucket.
* One upside to chaining is that with a good hash function, chaining still averages out to have a search time of O(1).
* Example of hash tables - Unix/Linux operating systems use a hash table to store the contents of all directories that are referenced by the environmental PATH variable.
* Example of hash tables - a spell checker can be implemented using a hash table.