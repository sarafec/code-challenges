// adapted from http://blog.benoitvallon.com/data-structures-in-javascript/the-stack-data-structure/

function Stack() {
    this.stack = [];
}

Stack.prototype = {
    push: function(value) {
        this.stack.push(value);
    },

    pop: function() {
        return this.stack.pop();
    },

    peek: function() {
        return this.stack[this.stack.length - 1];
    },

    length: function() {
        return this.stack.length;
    },

    print: function() {
        console.log(this.stack.join(' '));
    }
};