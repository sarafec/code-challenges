// adapted from nicholas c. zakas

function DoublyLinkedList() {
    this._head = null;
    this._tail = null;
    this._length = 0;
}

DoublyLinkedList.prototype = {
    constructor: DoublyLinkedList,

    add: function(data) {
        var node = {
            data: data,
            next: null,
            prev: null
        };

        // edge case: no items in the list
        if (this._length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            // attach to the tail node
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
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
            i = 0;

            // edge case: removing the first item
            if (index === 0) {
                this._head = current.next;

                // edge case - if there is only one item in the list, you remove it. this._head will be null
                // you should also set this._tail to null to destroy the list
                if(!this._head) {
                    this._tail = null;
                } else {
                    this._head.prev = null;
                }
            // edge case: removign the last item
            } else if (index === this._length - 1) {
                current = this._tail;
                this._tail = current.prev;
                this._tail.next = null;
            } else {
                // find the location
                while(i++ < index) {
                    current = current.next;
                }

                // skip over the item to remove
                current.prev.next = current.next;
                current.next.prev = current.prev;
            }
            this._length--;

            // return the value
            return current.data;
        } else {
            return null;
        }
    },

    size: function() {
        return this._length;
    },

    toArray: function() {
        var result = [],
            current = this._head;

        while(current) {
            result.push(current.data);
            current = current.next;
        }

        return result;
    },
    
    toString: function() {
        return this.toArray().toString();
    }
};