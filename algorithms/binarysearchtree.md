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
