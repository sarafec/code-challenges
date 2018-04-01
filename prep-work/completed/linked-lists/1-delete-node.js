function deleteLLNode(node) {
	if (node.next === null) return;

	node.value = node.next.value;
	node.next = node.next.next;
}
