The following is definition of Binary Search Tree(BST) according to Wikipedia

Binary Search Tree, is a node-based binary tree data structure which has the following properties:
 - The left subtree of a node contains only nodes with keys lesser than the node’s key.
 - The right subtree of a node contains only nodes with keys greater than the node’s key.
 - The left and right subtree each must also be a binary search tree.
There must be no duplicate nodes.

 What is the big O lookup time for a value in a binary search tree?
 O(h), h being the height of the tree

 How can you find the maximum depth of a BST?

       function maxDepth(root) {
          if (root == null) return 0;
          let left = maxDepth(root.left);
          let right = maxDepth(root.right);
          return Math.max(left, right) + 1;
       }

 How can you determine what the Least common ancestor of two nodes is?
 We can simply find the way from the nodes to the root and push those nodes to 2 different arrays. Then return the common element just before the mismatch.       
