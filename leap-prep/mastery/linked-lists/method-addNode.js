/*

TODOS: 
- Add explaination
- Whiteboard (high priority)

*/

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
    }
};