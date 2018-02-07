// adapted from http://blog.benoitvallon.com/data-structures-in-javascript/the-queue-data-structure/

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

