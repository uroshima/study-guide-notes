What's heap?
Heap is a binary tree with two special properties: it must have all of its nodes in a specific order, and its shape must be complete (except the last level, and they all have to filled the heap starting from the left side)

What about the order of a heap — what are the rules for that?
The basic rule for the order property of a heap is this: a parent nodes (including the root node) of a heap must either be greater than or equal to the value of its children nodes (Max Heap), or less than or equal to the value of its children nodes (Min Heap). Either of these two formats is acceptable for a heap and, based on the ordering of the parent-child nodes, we can classify heaps based on their ordering.

How do we represent heap?
We represent a heap as an array.Why? It’s because of queues!
We might remember that queues are data structures that follow the first-in, first-out (FIFO) principle, and are used in tons of places: managing requests, jobs, CPU scheduling, are just a few examples. Heaps are often implemented as arrays because they are super efficient ways of representing priority queues.
This one specific characteristic of heaps that we’ve been referencing repeatedly is exactly what makes heaps the data structure of choice when it comes to priority queues! Finding the maximum of minimum value element takes a constant amount of time, which makes it efficient to dequeue an item. Similarly, because of their binary tree structure, adding or removing an element takes logarithmic time, since we eliminate half of the possible nodes with each level that we traverse to add/delete an element.

 What is a Priority Queue?
 Priority Queue is similar to queue where we insert an element from the back and remove an element from front, but with a one difference that the logical order of elements in the priority queue depends on the priority of the elements. The element with highest priority will be moved to the front of the queue and one with lowest priority will move to the back of the queue. Thus it is possible that when you enqueue an element at the back in the queue, it can move to front because of its highest priority.

 What is the formula for getting the left child of a Heap root node? Right child?
If a parent node’s index is represented by index i in an array, then it’s left child will always be located at 2i + 1. Similarly, if a parent node’s index is represented by index i in an array, then it’s right child will always be located at 2i + 2.

What is the formula for getting the parent of a node?
(n - 1) / 2 (rounded up, so if it is (6 - 1) / 2 => 5 / 2 = 2.5 => 2)
n - current node
