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
    }
};