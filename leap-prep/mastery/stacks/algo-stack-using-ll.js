// implement a stack using a queue using a linked list

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

// linked list implementation
// assume size is taken care of
function LinkedList() {
    this._length = 0;
    this._head = null;
}

LinkedList.prototype = {
    add: function(data) {
        var node = {
            data: data,
            next: null
        },
        current;

        if(this._head === null) {
            this._head = node;
        } else {
            current = this._head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this._length++;
    },

    item: function(index) {
        if(index > -1 && index < this._length) {
            var current = this._head,
            i = 0;

            while(i++ < index) {
                current = current.next;
            }
            return current.data;
        } else {
            return null;
        }
    },

    remove: function(index) {
        if(index > -1 && index < this._length) {
            var current = this._head,
            previous,
            i = 0;

            // edge case: you need to remove the first item
            if(index === 0) {
                this._head = current.next;
            } else {
                // find the right location
                while(i++ < index) {
                    previous = current;
                    current = current.next;
                }
                // skip the item to remove
                previous.next = current.next;
            }
            this._length--;

            // return the value
            return current.data;
        } else {
            return null;
        }
    },

    peek: function() {
        return this.head.data;
    },

    isEmpty: function() {
        return this.head === null ? true : false;
    }
};