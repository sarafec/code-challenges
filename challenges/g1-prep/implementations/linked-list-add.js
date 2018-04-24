function LinkedList() {
	this.head = null;
}

LinkedList.prototype = {
	add: function (data) {
		let 	node = {
				data: data,
				next: null
			},
			current;
		
		if (this.head === null) {
			this.head = node;
		} else {
			current = this.head;
			
			while (current.next) {
				current = current.next;
			}

			current.next = node;
		}
		
	}
};
