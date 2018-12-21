// In this article, we would be using Adjacency List to represent a graph because in most cases
// it has certain advantage over the other representation.
// Now Lets see an example of Graph class-
// We used a Map Object provided by ES6 in order to implement Adjacency list.
// Where key of a map holds a vertex and values holds an array of adjacent node.

// create a graph class
class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
// add vertex to the graph
    addVertex(v) {
        // initialize the adjacent list with a null array
        this.AdjList.set(v, []);
    }

    // add edge to the graph
    addEdge(v, w) {
        // get the list for vertex v and put the
        // vertex w denoting edge betweeen v and w
        this.AdjList.get(v).push(w);

        // Since graph is undirected,
        // add an edge from w to v also
        this.AdjList.get(w).push(v);
    }


    // Prints the vertex and adjacency list
    printGraph() {
        // get all the vertices
        var get_keys = this.AdjList.keys();

        // iterate over the vertices
        for (var i of get_keys)  {
            // great the corresponding adjacency list
            // for the vertex
            var get_values = this.AdjList.get(i);
            var conc = "";

            // iterate over the adjacency list
            // concatenate the values into a string
            for (var j of get_values)
                conc += j + " ";

            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }

    // bfs(startingNode) – It performs Breadth First Search from the given startingNode
    // function to performs BFS
    bfs(startingNode) {
        // create a visited array
        var visited = [];
        for (var i = 0; i < this.noOfVertices; i++)
            visited[i] = false;

        // Create an object for queue
        // A Queue is used to keep the unvisited nodes
        var q = new Queue();

        // add the starting node to the queue
        visited[startingNode] = true;
        q.enqueue(startingNode);

        // loop until queue is element
        while (!q.isEmpty()) {
            // get the element from the queue
            var getQueueElement = q.dequeue();

            // passing the current vertex to callback funtion
            console.log(getQueueElement);

            // get the adjacent list for current vertex
            var get_List = this.AdjList.get(getQueueElement);

            // loop through the list and add the elemnet to the
            // queue if it is not processed yet
            for (var i in get_List) {
                var neigh = get_List[i];

                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.enqueue(neigh);
                }
            }
        }
    }

    // dfs(startingNode) – It performs the Depth first traversal on a graph
    // Main DFS method
    dfs(startingNode) {

        var visited = [];
        for (var i = 0; i < this.noOfVertices; i++)
            visited[i] = false;

        this.DFSUtil(startingNode, visited);
    }

    // Recursive function which process and explore
    // all the adjacent vertex of the vertex with which it is called
    DFSUtil(vert, visited) { 
        visited[vert] = true;
        console.log(vert);

        var get_neighbours = this.AdjList.get(vert);

        for (var i in get_neighbours) {
            var get_elem = get_neighbours[i];
            if (!visited[get_elem])
                this.DFSUtil(get_elem, visited);
        }
    }
}

// Now we will use the graph class to implement the graph shown on the image:

// Using the above implemented graph class
var g = new Graph(6);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();


// Given a directed graph,design an algorithm to find out 
// whether there is a route between two nodes 
bfs(graph, startingNode, endingNode) {
    var visited = [];
    for (var i = 0; i < graph.noOfVertices; i++) {
        visited[i] = false;
    }
    var q = new Queue();
    visited[startingNode] = true;
    q.enqueue(startingNode);

    while (!q.isEmpty()) {
\       var getQueueElement = q.dequeue();
        var get_List = graph.AdjList.get(getQueueElement);

        for (var i in get_List) {
            var neigh = get_List[i];

            if (neigh == endingNode) {
                return true;
            }
            if (!visited[neigh]) {
                visited[neigh] = true;
                q.enqueue(neigh);
            }
        }
    }
    return false;
}