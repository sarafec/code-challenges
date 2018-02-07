### BaseCS: What's a Linked List, Anyway?
* Linked lists are a linear data structure. There is a sequence and an order to how they are constructed adn traversed.
* Metaphor for a linked list - a game of hopscotch. In order to get to the end of the list, we have to go thorugh all of the items sequentially.
* Linked lists don't need to take up a single block of memory. The memory that they use can be scattered throughout.
* Linked lists are a dynamic data structure and can shrink/grow in memory. It doesn't need a set amount of memory to be allocated in order to exist. 
* A linked list is made up a series of nodes - which are the elements of the list.
* A linked list has a reference to the starting point of the list, called the head.
* The end of the list isn't a node. Instead, it points to null or an empty value.
* In a linked list, a node is made up of two parts - some data that it holds and a reference to the next node. In other words, a node only knows what data it contains and who its neighbor is.
* To traverse a linked list, we'll lean on the pointer references to the next node. 
* Adding or removing a node with a linked list becomes as simple as rearranging some pointers.
* A doubly linked list has two references contained within each node - a reference to the next node and the previous node.
* Keep in mind with a doubly linked list, storing two reference pointers costs memory.
* A circular linked list doesn't end in a node pointing to a null value. Instead, it has a node that acts as the tail of the list. 
* A linked list is usually efficient when it comes to adding and removing msot elements. It can be very slow to search and find a single element.
* If you need to do a lot of traversal, iteration, or quick index-level access, a linked list is not your friend. You might try an array.