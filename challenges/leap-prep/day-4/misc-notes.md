### Miscellaneous Notes from Online Videos 

#### Linked Lists  
* Insert Method  
`function insert() {
    current = this.head;
    while(current.next !== null) {
        current = current.next;
    }
};`

* Prepend Method  
`function prepend() {
    newHead = node;
    newHead.next = this.head;
    this.head = newHead;
};`
It swaps the current head with the new head and sets the newHead's next pointer to the old head.

* Remove Method  
To delete values from a linked list, we'll stop one node early and see if my next pointer's data node is the value we are looking for.
`function remove(data) {
    if (this.head === null) 
        return;
    current = this.head;

    if(head.data === data) {
        head = head.next;
        return;
    }

    while(current.next !== null) {
        if (current.next.data === data) {
            current.next = current.next.next;
            return;
        }
    }
};`

Metaphor for linked list - it is like a treasure hunt. You have to find the one before it to find your next clue.  
Metaphor for doubly linked list - similar to browser history (front and back button).  

#### Stacks and Queues
Stacks are like stacks of plates.
Queues are like a line of people.

* Queue Properties and Methods: node (data, next), head, tail, isEmpty(), peek(), add(int), remove()

* isEmpty Method 
`function isEmpty() {
    if(this.head === null) {
        return true;
    } else {
        return false;
    }
};`

* peek Method
`function peek() {
    return this.head.data;
};`

* add Method
`function add(data) {
    var node = new Node(data);
    if (tail !== null) {
        tail.next = node;
    }
    tail = node;
    if(head === null) {
        head = node;
    }
};`

* remove Mehthod
`function remove() {
    var data = this.head.data;
    this.head = head.next;
    if(this.head === null) {
        tail = null;
    }
    return data;
};`

* Stack properties and methods - node (data, next), top, isEmpty(), peek(), push(), pop()

* isEmpty Method  
`function isEmpty() {
    if(this.top === null) {
        return true;
    } else {
        return false;
    }
};`

* peek Method
`function peek() {
    return this.top.data;
};`

* push Method
`function push() {
    node = new Node(data);
    node.next = this.top;
    this.top = node;
};`

* pop Method
`function pop() {
    data = this.top.data;
    this.top = this.top.next;
    return data;
};`

#### Recursion  
Counting Text Files Example
`function countTxt(dir) {
    if (dir === null) 
        return 0;
    
    count = 0;
    forEach(dir) {
        if(file.endsWith('.txt'));
            count += 1;
    }
    forEach(subdir) {
        count += countTxt(subdir);
    }
    return count;
};`

* Recursion must have a base case and a recursive case. In some cases it'll have more than one of each.
* Recursion replaces loops.

Fibonacci Sequence Example
`function fib(n) {
    if(n <= 0) [
        return 0;
    ] else if (n === 1) {
        return 1;
    } else {
        return fib(n-1) + fib(n-2);
    }
};`

Factorial Example
`function factorial(n) {
    product = 1;
    while(n > 0) {
        product *= n;
        n--;
    }
    return product;
};`

* Call Stack - when you call a function, the system sets as a space in memory for that function to do its necessary work. We might call these chunks of memory stack frames.
* More than one function's stack frame may exist on memory at any given time.
* The stack frame for the most recently caleld function is always at the top of the stack.
* When a frame is popped off the stack, the function imemdiately below it becomes the new activ efunction on the top of the stack. This function picks up immediately where it left off.