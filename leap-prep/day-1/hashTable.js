// adapted from http://blog.benoitvallon.com/data-structures-in-javascript/the-hash-table-data-structure/

function HashTable(size) {
    this.values = {};
    this.numberOfValues = 0;
    this.size = size;
}
  
HashTable.prototype = {
    add: function(key, value) {
        var hash = this.calculateHash(key);
        if(!this.values.hasOwnProperty(hash)) {
          this.values[hash] = {};
        }
        if(!this.values[hash].hasOwnProperty(key)) {
          this.numberOfValues++;
        }
        this.values[hash][key] = value;
    },

    remove: function(key) {
        var hash = this.calculateHash(key);
        if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
          delete this.values[hash][key];
          this.numberOfValues--;
        }
    },

    calculateHash: function(key) {
        return key.toString().length % this.size;
    },

    search: function(key) {
        var hash = this.calculateHash(key);
        if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
          return this.values[hash][key];
        } else {
          return null;
        }
    },

    length: function() {
        return this.numberOfValues;
    },

    print: function() {
        var string = '';
        for(var value in this.values) {
          for(var key in this.values[value]) {
            string += this.values[value][key] + ' ';
          }
        }
        console.log(string.trim());
    }
};