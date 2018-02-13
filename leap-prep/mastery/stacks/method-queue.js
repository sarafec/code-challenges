/*

TODOS: 
- Add explaination
- Whiteboard (high priority)

*/

function Queue() {
    this.queue = [];
  }
  
Queue.prototype = {
    enqueue: function(value) {
        this.queue.push(value);
    },

    dequeue: function() {
        return this.queue.shift();
    },

    peek: function() {
        return this.queue[0];
    },

    length: function() {
        return this.queue.length;
    },

    print: function() {
        console.log(this.queue.join(' '));
    }
    
};  