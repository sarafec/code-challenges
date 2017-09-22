//https://github.com/nzakas/computer-science-in-javascript/blob/master/data-structures/linked-list/linked-list.js

function LinkedList() {


    //The number of items in the list.
    this._length = 0;
    
    //Pointer to first item in the list.
    this._head = null;
}

LinkedList.prototype = {

    //restore constructor
    constructor: LinkedList,

    //Appends some data to the end of the list. This method traverses
    //the existing list and places the value at the end in a new item.
    add: function (data){
    
        //create a new item object, place data in
        var node = {
                data: data,
                next: null
            },
            
            //used to traverse the structure
            current;
    
        //special case: no items in the list yet
        if (this._head === null){
            this._head = node;
        } else {
            current = this._head;
            
            while(current.next){
                current = current.next;
            }
           
            current.next = node;
        }
        
        //don't forget to update the count
        this._length++;
    
    },
    
    //Retrieves the data in the given position in the list.
    item: function(index){
    
        //check for out-of-bounds values
        if (index > -1 && index < this._length){
            var current = this._head,
                i = 0;
                
            while(i++ < index){
                current = current.next;
            }
        
            return current.data;
        } else {
            return null;
        }
    },
    
    //Removes the item from the given location in the list.
    remove: function(index){
    
        //check for out-of-bounds values
        if (index > -1 && index < this._length){
        
            var current = this._head,
                previous,
                i = 0;
                
            //special case: removing first item
            if (index === 0){
                this._head = current.next;
            } else {
        
                //find the right location
                while(i++ < index){
                    previous = current;
                    current = current.next;            
                }
            
                //skip over the item to remove
                previous.next = current.next;
            }
        
            //decrement the length
            this._length--;
        
            //return the value
            return current.data;
        
        } else {
            return null;
        }
    
    },
    
    //Returns the number of items in the list.
    size: function(){
        return this._length;
    },
    
    //Converts the list into an array.
    toArray: function(){
        var result = [],
            current = this._head;
        
        while(current){
            result.push(current.data);
            current = current.next;
        }
        
        return result;
    },
    
    //Converts the list into a string representation.
    toString: function(){
        return this.toArray().toString();
    }
};