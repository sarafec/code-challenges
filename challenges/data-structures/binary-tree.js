// work left to do 
// - fix this, test it out

function Node(data) {
    this.data = data;
    this.left = left;
    this.right = right;
};

function testFunction() {
    root = Node(1);
    root.left = Node(2);
    root.right = Node(3);
    root.left.left = Node(4);
    root.left.right = Node(5);
}

console.log(testFunction());