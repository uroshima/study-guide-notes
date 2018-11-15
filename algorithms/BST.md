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

Practice
1. Given preorder traversal of a binary search tree, construct the BST.
For example, if the given traversal is {10, 5, 1, 7, 40, 50}, then the output should be root of following tree.
      10
     /   \
    5     40
  /  \      \
 1    7      50

The first element of preorder traversal is always root. For example in {10, 5, 1, 7, 40, 50}, 10 is the first element, so we make it root. Now we look for the first element greater than 10, we find 40. So we know the structure of BST is as following.

         10
       /    \
      /      \
{5, 1, 7}   {40, 50}

We recursively follow above steps for subarrays {5, 1, 7} and {40, 50}, and get the complete tree.

 def bst(arr)
   return arr if arr.length <= 1
   root = arr.shift()
   left = []
   right = []
   arr.each do |el|
     if el < root
       left << el
     else
       right << el
     end
   end
   p left, right
   return bst(left) + [root] + bst(right)
 end
