// Question 4
// Print out all the prime numbers from 1 to 100 without using loop

// Helper function that return true if the number is prime
function isPrime(n, hn) {
    if (hn === 0 || n <= 2) {
        return true;
    }
    hn = hn || parseInt(n / 2);
    if (n % hn === 0 && hn !== 1) {
        return false;
    } else {
        return isPrime(n, hn - 1);
    }
};

function allPrimes(n, arr = []) {
  if (n === 100) {
    if (isPrime(n)) {
      arr.push(n);
      return arr;
    }
    return arr;
  } else {
    if (isPrime(n)) {
      arr.push(n);
      return allPrimes(n + 1, arr);
    }
    return allPrimes(n + 1, arr);
  }
}


// allPrimes(2)

// Question 3
// Create a program that takes an array with integers as an input. The array should be sorted, 
// you can add and remove elements but keep the array sorted

class Sorted {
    constructor(arr) {
      this.arr = arr.sort();
    }
  
    sorted() {
      console.log(this.arr.sort());
    }
  
    add(n) {
      this.arr.push(n);
      console.log(this.sorted());
    }
  
    remove(n) {
      var index = this.arr.indexOf(n);
      if (index > -1) {
        this.arr.splice(index, 1);
      }
      console.log(this.sorted());
    }  
  }

// Question 5
// Given an array and a number, return all the combinations with the length of that number
// ex. arr = [1, 2, 3] k = 2 should print out
// 1 2
// 1 3
// 2 3
// 2 1
// 3 1
// 3 2
function printPermutations(array, k){
    var combinations = [];
    var indices = [];
    
    function run(level){
        for(var i=0; i < array.length; i++){
            if(!indices[i]) {
                indices[i] = true;
                combinations[level] = array[i];
                
                if(level < k - 1){
                    run(level + 1, i + 1);
                } else {
                    console.log(combinations.join(" "));
                }
                
                indices[i] = false;
            }
        }
    }
    
    run(0, 0);
}

// Question 2
// Ask the user for an input of integers, one or multiple; 
// than make a function where you can remove the biggest number
// insert 1 40 3 23 8
// inserted 1 40 3 23 8
// insert 5 10
// inserted 5 10
// remove 
// removed 40
// remove 
// removed 23

<html>
<body>
<p>Click the buttons to modify the array</p>

<button onclick="insert()">Insert</button>
<button onclick="remove()">Remove</button>

<p id="demo"></p>

<script>
    let arr = []
  
    function insert() {
        let x = prompt("Enter a number");
        let split = x.split(' ');
        alert("Inserted: " + x.toString());
        for (let i = 0; i < split.length; i++) {
            arr.push(parseInt(split[i]));
        }

        alert("The new array is: " + arr)
    }

    function remove() {
        if (arr.length === 0) {
            alert("The array is empty")
        } else {
            arr.sort();
            let biggest = arr.pop();
            alert("The largest number removed is: " + biggest);
            alert("Remaining array: " + arr)
        }
    }

</script>

</body>
</html>

