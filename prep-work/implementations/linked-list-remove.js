function LinkedList() {
	this.head = null;
}

LinkedList.prototype = {
	remove: function(position) {
		if (this.head === null) return;
		
		let temp = this.head;
		
		if (position === 0) {
			head = temp.next;
			return;
		}

		for (let i = 0; temp !== null && i < position-1; i++) {
			temp = temp.next;
		}

		if (temp === null || temp.next === null) {
			return;
		}

		let next = temp.next.next;
		temp.next = next;
	}
};
