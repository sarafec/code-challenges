/**
 *  Kal Academy - Tree Question 1
 *  problem statement:
 *      given a binary search tree, 
 *      create a linked list of all the nodes at each length.
 * 
 *  explaination: 
 * 		perform a breadth first search
 * 		add each level as a string to a linked list 
 */

 // define bst
 // insert, traverse(bfs), toArray

 // define queue
 // with methods enqueue, dequeue, removeHead, isEmpty

 // define linked list

 // perform breadth-first search on bst
 // 1 - create an empty queue
 // 2 - create a temp var for root
 // 3 - loop while the temp var is not null
 // 3a - print temp node
 // 3b - enqueue temp var's children, left then right
 // 3c - dequeue a node from the queue and assign its level to temp var

/* EXAMPLE BFS
    let queue = new Queue();
    queue.enqueue(root);
    while(!queue.isEmpty()) {
        let tempNode = queue.removeHead();
        console.log(tempNode.data);

        // enqueue left child
        if (tempNode.left !== null) {
            queue.add(tempNode.left);
        }

        // enqueue right child
        if (tempNode.right !== null ) {
            queue.add(tempNode.right);
        }
    }
*/

 // create tempArr for levels, insert into linked list