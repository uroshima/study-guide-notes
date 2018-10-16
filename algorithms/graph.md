Graphs

How do we define a graph matematically?
G = (V, E)

 What is the maximum number of edges in a directed simple graph? Undirected simple graph? Answer should be in terms of N
 Directed N(N - 1)
Undirected (N(N - 1)) / 2

 What are some naive ways we can store and traverse graphs? Be able to discuss time/space complexity of these approaches, and what issues we may face.
 In undirected graph,  we store the vertices in a set and the edges in an object which contains edge objects (unordered pairs).
In directed graph, we store the vertices in the same way but the edges is an object which contains ordered pairs where (origin node is the first)

 Give an example of various types of graphs (Weighted Undirected, Unweighted Directed, Unweighted Undirected, etc.)
 Facebook (undirected graph), Twitter (directed), Websites where you can go to different links, Flights (directed and weighted because they carry prize)

 If we were only concerned about space complexity, is an Adjacency Matrix efficient? Why/why not?
 It's efficient only if the graph is dense or the number of vertices is too less to matter

  If we were only concerned about time complexity, is an Adjacency Matrix efficient? Why/why not?
  If we are concerned about finding if two nodes are connected then yes it is, otherwise it's O(v) which in case where number of v is huge then no.

  Give a high level overview of an Adjacency Matrix
  Adjacency matrix is a square matrix used to represent a finite graph. The elements of the matrix indicate whether pairs of vertices are adjacent or not in the graph.
In the special case of a finite simple graph, the adjacency matrix is a (0,1)-matrix with zeros on its diagonal. If the graph is undirected, the adjacency matrix is symmetric.

What benefits do we get from an Adjacency List?
Much less memory than the matrix, and also better time complexity in most of the cases

Give a high level overview of an Adjacency List
Adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a vertex in the graph. This is one of several commonly used representations of graphs for use in computer programs. It has a better space complexity, and in most of the cases better time complexity

 What supporting data structure might you use for BFS and DFS, respectively?
 Stack for DFS and Queue for BFS

 What are the steps for DFS on a graph?
 First, we need to know our starting node or vertice. Then we put it in a stack and push it in an array 'visited'. Then we check for its children or connected nodes. We add the first child in the stack (we choose a child based on a rule we want to define, like always choose the smaller value or choose based on the alphabetical order) and push it in 'visited as well. We move to that child and then do the same from there. If there are no more children, we pop the that node from the stack (the last one) and we go back to the parent node to check if there are any other children that are not 'visited'. If there are, we repeat the same process, otherwise we go back again to the parent and pop it from the stack.

 What are the steps for BFS on a graph?
 For BFS in a graph we use queue as a helper data structure. We start from a node and add it in the queue and in the 'visited' array. Then we check its children and add them in the queue and array as well. When there are no more children that are not part of the 'visited' array, we pop that node from the queue and move to one of the children (we can decide based on the smallest value, alphabetical order etc.). From there we repeat the process. But this time we are not gonna move further down to the children until we do this for all nodes in the line (all the children of our parent node).

  On which types of Graphs can we do a topological sort?
  Directed Acyclic Graph (DAG)

 What data structure do we use to assist with the topological sort algorithm?
 We use Stack (to sort the vertices) and Set (to keep track of visited vertices)

 What is a difference between Topological Sort and DFS?
 In DFS, we start from a vertex, we first print it and then recursively call DFS for its adjacent vertices. In topological sorting, we use a temporary stack. We don’t print the vertex immediately, we first recursively call topological sorting for all its adjacent vertices, then push it to a stack. Finally, print contents of stack. A vertex is pushed to stack only when all of its adjacent vertices (and their adjacent vertices and so on) are already in stack.
