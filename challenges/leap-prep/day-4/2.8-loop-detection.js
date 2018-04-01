/* 
Cracking the Codign Interview
2.8 Loop Detection  
Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
A circular linked list is a corrupt linked list in which a node's next pointer points to an earlier node, 
as to make a loop in the linked list.

My thoughts: 
Detecting a link would be easy using the the running method to set two pointers to run around.
Returning the node at the beginning of the loop is the hangup.
You'd know you already were there if you kept track of each node, but that would 
be inefficient for tons of nodes O(n) space and O(n) to check in the worst case in the worst case.

Actual Solution:
Detect if a linked list has a loop
Then, we have a fast and slow poitner. Slow pointer enters the loop after k nodes, fast pointer is 
k nodes into the loop. This means that fastpointer and slow poitner are loop_size - k nodes away from 
eachother. 
If fast poitner moves two nodes for each node that slowpointer moves, they move one node closer to eachother each turn.
They will meet after loop_size - k turns. Both will be k nodes from the front o fthe loop.
The head of the linked list is also k nodes from the front of the loop. If we keep one pointer where it is, and move the other
pointer to the head of the linked list, then they will meet at the front of the loop.

*/

function findBeginning(head) {
    var slow = head;
    var fast = head;

    // find meeting point
    // this will be loop_size - k steps into the linked list
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        // collision
        if (slow === fast) {
            break;
        }
    }
    // if there is no meeting point, no loop
    if (fast === null || fast.next === null) ){
        return null;
    }

    // move slow to head, keep fast at meeting point
    // each are k steps from the loop start
    // if they move at the same place, they will meet at 
    // loop start
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    // return node at start of loop
    return fast;
}