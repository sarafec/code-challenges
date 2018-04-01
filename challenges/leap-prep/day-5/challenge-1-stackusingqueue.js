/*
Implement a stack using a single queue.

Solution:
Insert elements at the front, keeping the previous elements
the same.

To push
Enqueue an item.
Dequeue all other elements in a queue.
Enqueue all other items back into the queue.

To pop
Dequeue an item from queue
*/

function push() {
    var queue = new LinkedList();
    var size = queue.size();
    q.add(val);
    for(let i = 0; i < size; i++) {
        var x = q.remove();
        q.add(x);
    }
}

function pop() {
    if(queue.isEmpty()) {
        console.log('No elements');
        return -1;
    }
    var x = q.remove();
    return x;
}

function top() {
    if(queue.isEmpty()){
        return -1;
    }
    return q.peek();
}

function isEmpty() {
    return queue.isEmpty();
}