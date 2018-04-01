### BaseCS: Stacks and Overflows
* A call stack is a structure that stores all the things that happen when a program is executed.
* A stack is an abstract data type.
* A stack is a linear data structure that contains a bunch of elements. This means there is a sequence and an order to how they are constructed and traversed.
* With a singly linked list, insertion and deletion can only happen from one end of the stack.
* You can think of a stack as a stack of books - when you add books to the pile you'll add them to the top of the list.
* Stacks are last in, first out. 
* Stacks can be implemented using a link list because they only grow in one direction.
* Stacks can also be implemented using an array. The drawback is that arrays require a set amount of memory and space to be set aside. These are allocated before they are created.
* Stacks implemented with arrays can result in a stack overflow if the elements exceed the array's size cap.
* Stacks by their nature do not have an upper-limit.
* Stack methods: push, pop, top(peek), isEmpty, size
* Popular examples of stack implementations - undo/redo functionality, HTML5 History object (pushState, replaceState, popstate), and the call stack.
   
Further resources:
* [Reverse a string or linked list using a stack](https://www.youtube.com/watch?v=hNP72JdOIgY)
* [Pushing and popping with the History API](http://html5doctor.com/history-api/)
