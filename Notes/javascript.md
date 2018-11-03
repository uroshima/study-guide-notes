 Give a high level overview of what an object's prototype represents -->
 Go here https://javascript.info/function-prototype

 What are the differences between the __proto__ and prototype attributes?
 prototype is a property of a Function object. It is the prototype of objects constructed by that function.
__proto__ is internal property of an object, pointing to its prototype.

What happens when we do or don't explicity set an object's prototype?
If we do set it, it's gonna overwrite the existing one, if not it's gonna point to an object with the only property constructor that points back to the function itself.

What is an object's default prototype?
The default "prototype" is an object with the only property constructor that points back to the function itself.

What is data encapsulation?
Data encapsulation refers to the idea that some data should not be directly exposed

Formally define a Javascript closure
A closure is the combination of a function and the environment from which it was declared. Closure allows a function to access variables from an enclosing scope — environment — even after it leaves the scope in which it was declared.

 What are the benefits of a Javascript closure?
 One of the main benefits of closures is that it allows data encapsulation. This refers to the idea that some data should not be directly exposed. Also, It can refer to outer scope variables even after the outer function has returned.

 Give an example of a closure
One of the most common interview problems on this subject:
What is wrong with the following code and how would you fix it?

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(`The value ${arr[i]} is at index: ${i}`);
  }, (i+1) * 1000);
}
In this example the console will display four identical messages "The value undefined is at index: 4". This happens because each function executed within the loop will be executed after the whole loop has completed, referencing to the last value stored in i, which was 4.
One solution would be declaring the i variable with let, which creates a unique scope for each iteration and storing each value within its scope.

for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(`The value ${arr[i]} is at index: ${i}`);
   }, (i) * 1000);
}

 What is the difference between the memory heap and call stack in javascript?
 1. Stack is used for static memory allocation and Heap for dynamic memory allocation, both stored in the computer's RAM .
2. Variables allocated on the stack are stored directly to the memory and access to this memory is very fast. When a function or a method calls another function which in turns calls another function etc., the execution of all those functions remains suspended until the very last function returns its value. Variables allocated on the heap have their memory allocated at run time and accessing this memory is a bit slower
3. The stack is always reserved in a LIFO order, the most recently reserved block is always the next block to be freed. This makes it really simple to keep track of the stack, freeing a block from the stack is nothing more than adjusting one pointer.Element of the heap have no dependencies with each other and can always be accessed randomly at any time. You can allocate a block at any time and free it at any time. This makes it much more complex to keep track of which parts of the heap are allocated or free at any given time.

When to use stack and when to use heap?
You can use the stack if you know exactly how much data you need to allocate before compile time and it is not too big. You can use heap if you don't know exactly how much data you will need at runtime or if you need to allocate a lot of data.

 What is one problem with programming languages that a fully single-threaded?
 They can execute only one thread (the smallest sequence of programmed instructions that can be managed by the language) at a time

 Is Javascript a single-threaded language? Explain (Hint: This may not be a yes or no question)
 Javscript is single-threaded. Each browser window has only one Javascript thread running inside them. What makes the asynchronous events possible is the browser’s Event Loop and the associated Event Queue.

  When is using an Immediate Invoked Function Expression (IIFE)
 necessary?
  - Enables you to attach private data to a function
  - Creates fresh environments
  - Avoids polluting the global namespace.

  IIFE example
  var result = [];
  for (var i=0; i < 5; i++) {
    result.push( function() { return i } );
  }
  console.log( result[1]() ); // 5
  console.log( result[3]() ); // 5

  result = [];
  for (var i=0; i < 5; i++) {
    (function () {
      var j = i; // copy current value of i
      result.push( function() { return j } );
    })();
  }
  console.log( result[1]() ); // 1
  console.log( result[3]() ); // 3

 What is the syntax for an IIFE?
 The (surrounding parenthesis) prevents from treating it as a function declaration.
 The final parenthesis() are executing the function expression.

 What's hoisting?
 The behavior of “moving” var and function declarations to the top of their respective scopes during the compilation phase is called hoisting.
Function declarations are completely hoisted. This means that a declared function can be called before it is defined.
Variables are partially hoisted. var declarations are hoisted but not its assignments.
let and const are not hoisted.

What is a pure function? Impure function?
An impure function is a function that mutates variables/state/data outside of it’s lexical scope, thus deeming it “impure” for this reason. A pure function is much easier to comprehend, especially as our codebase may scale, as well as role-based functions that do one job and do it well. Pure functions don’t modify external variables/state/data outside of the scope, and returns the same output given the same input. Therefore it is deemed “pure”.

What is jQuery?
jQuery is a lightweight, "write less, do more", JavaScript library.
The purpose of jQuery is to make it much easier to use JavaScript on your website.
jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.
jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.
The jQuery library contains the following features:
 - HTML/DOM manipulation
 - CSS manipulation
 - HTML event methods
 - Effects and animations
 - AJAX
 - Utilities

 What is AJAX?
 AJAX is not a programming language.
 AJAX is a technique for accessing web servers from a web page.
 AJAX stands for Asynchronous JavaScript And XML. In a nutshell, it is the use of the XMLHttpRequest object to communicate with servers. It can send and receive information in various formats, including JSON, XML, HTML, and text files. AJAX’s most appealing characteristic is its "asynchronous" nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page.
The two major features of AJAX allow you to do the following:
1. Make requests to the server without reloading the page
2. Receive and work with data from the server

 What is an XMLHttpRequest?
 XMLHttpRequest (XHR) is an API in the form of an object whose methods transfer data between a web browser and a web server. The object is provided by the browser's JavaScript environment.

  What does the new keyword do in Javascript?
  The new keyword invokes a function in a special way. Functions invoked using the new keyword are called constructor functions.
  So what does the new keyword actually do?
 - Creates a new object.
 - Sets the object’s prototype to be the prototype of the constructor function.
 - Executes the constructor function with this as the newly created object.
 - Returns the created object. If the constructor returns an object, this object is returned.

 Whats event bubling in JS?
 When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

  How can you stop event bubbling?
  A bubbling event goes from the target element straight up. Normally it goes upwards till <html>, and then to documentobject, and some events even reach window, calling all handlers on the path.
But any handler may decide that the event has been fully processed and stop the bubbling.
The method for it is event.stopPropagation().

What is the difference between event.target and event.currentTarget?
event.target is the deepest element that originated the event.
event.currentTarget (=this) is the current element that handles the event (the one that has the handler on it)

 What does stopImmediatePropagation do?
If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute.
In other words, event.stopPropagation() stops the move upwards, but on the current element all other handlers will run.
To stop the bubbling and prevent handlers on the current element from running, there’s a method event.stopImmediatePropagation(). After it no other handlers execute.

What is JSON.stringify() and when to use it?
A common use of JSON is to exchange data to/from a web server.
When sending data to a web server, the data has to be a string.
Convert a JavaScript object into a string with JSON.stringify().
var obj = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj);
myJSON => {"name":"John","age":30,"city":"New York"}

How to test JS Class?
You can test it with creating html file, opening it from the terminal and then opening the dev tools.
If there is no html file, you can type in "node" in the terminal and then paste the whole class.

 What is event delegation?
 Capturing and bubbling allow us to implement one of most powerful event handling patterns called event delegation.
The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
In the handler we get event.target, see where the event actually happened and handle it.

How do you get user input in JS?
Ruby has the methods puts and gets. JavaScript has console.log as an analogue to puts, but it doesn't have an exact analogue for gets.
In a web browser, you may use the prompt method to pop up a message box to ask for input from the user. When running server-side code in the node.js environment, prompt is not available (because node is not a graphical environment).
Instead, you must use the readline library when writing server-side node.js programs.

                                const readline = require('readline');

                                const reader = readline.createInterface({
                                  input: process.stdin,
                                  output: process.stdout
                                });

                                reader.question("What is your name?", function (answer) {
                                  console.log(`Hello ${answer}!`);
                                });

                                console.log("Last program line");

                                <!--
                                What is your name?
                                Last program line
                                Uroshima
                                Hello Uroshima!
                                -->

 Discuss 4 differences between ES5 and ES6 that you find important
 1. Block Scope
ES5 only had “function-level scope” (i.e. you wrap code in functions to create scope) and caused a lot of issues. ES6 provides “block”-level scoping(i.e curly-braces to scope) when we use “let” or “const” instead of “var”.
2. Lexical “this” (via Arrow Functions)
In ES5, “this” can vary based on “where” it is called and even “how” it is called and has caused all sorts of pains for JS developers. ES6 eliminates this major issue by “lexical” this.
Lexical “this” a feature that forces the variable “this” to always point to the object where it is physically located within.
3. Dealing With “arguments”
In ES5, “arguments” acts like an Array (i.e. we can loop over it), but is not an Array. So, all the Array functions like sort, slice and so on are not available.
In ES6, we can use a new feature called “Rest” parameters. It’s represented with 3 dots and a name like …args. Rest parameters is an Array and so we can use all the Array functions.
4. Classes
Conceptually, there is no such thing as a “Class”(i.e. blueprint) in JS like it is in other OO languages like Java. But people for a long time have treated the “function” (aka “function constructors”) that creates Objects when we use the “new” keyword as Classes.
And since JS doesn’t support the “Classes” and just simulates it via “prototypes”, it’s syntax has been very confusing for both existing JS developers and new comers who wants to use it in a traditional OO fashion. This is especially true for things like: creating subclasses, calling functions in parent class and so on.
ES6 brings a new syntax that’s common in various programming languages and makes the whole thing simple.

 What are the steps of a try..catch block in Javascript?
 - First, the code in try {...} is executed.
- If there were no errors, then catch(err) is ignored: the execution reaches the end of try and then jumps over catch.
- If an error occurs, then try execution is stopped, and the control flows to the beginning of catch(err). The err variable (can use any name for it) contains an error object with details about what’s happened.

 When creating a custom error, what attributes should it have?
 Our errors should support basic error properties like message, name and, preferably, stack.

 Discuss the differences between let, const, and var. What are their respective scopings?
 Before ES6, it was only possible to declare a variable using var. Variables and functions declared inside another function cannot be accessed by any of the enclosing scopes — they are function-scoped.
 Variables declared inside a block-scope, such as if statements and for loops, can be accessed from outside of the opening and closing curly braces of the block.
 Note: An undeclared variable — assignment without var, let or const — creates a var variable in global scope.

           function greeting() {
            console.log(s) // undefined
            if(true) {
              var s = 'Hi';
              undeclaredVar = 'I am automatically created in global scope';
            }
            console.log(s) // 'Hi'
          }
          console.log(s);  // Error — ReferenceError: s is not defined
          greeting();
          console.log(undeclaredVar) // 'I am automatically created in global scope'

ES6 let and const are new. They are not hoisted and block-scoped alternatives for variable declaration. This means that a pair of curly braces define a scope in which variables declared with either let or const are confined in.

        let g1 = 'global 1'
        let g2 = 'global 2'
        {   /* Creating a new block scope /*
          g1 = 'new global 1'
          let g2 = 'local global 2'
          console.log(g1)   // 'new global 1'
          console.log(g2)   // 'local global 2'
          console.log(g3)   // ReferenceError: g3 is not defined
          let g3 = 'I am not hoisted';
        }
        console.log(g1)    // 'new global 1'
        console.log(g2)    // 'global 2'      

A common misconception is that const is immutable. It cannot be reassigned, but its properties can be changed!   

        const tryMe = 'initial assignment';
        tryMe = 'this has been reassigned';  // TypeError: Assignment to constant variable.
        // You cannot reassign but you can change it…
        const array = ['Ted', 'is', 'awesome!'];
        array[0] = 'Barney';
        array[3] = 'Suit up!';
        console.log(array);     // [“Barney”, “is”, “awesome!”, “Suit up!”]
        const airplane = {};
        airplane.wings = 2;
        airplane.passengers = 200;
        console.log(airplane);   // {passengers: 200, wings: 2}     

What happens when you enable strict mode in javascript?
The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
With strict mode, you can not, for example, use undeclared variables.
Strict mode makes it easier to write "secure" JavaScript.
Strict mode changes previously accepted "bad syntax" into real errors.
As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

How does the rest/spread operator work in JS?
The rest parameters can be mentioned in a function definition with three dots .... They literally mean “gather the remaining parameters into an array”.
For instance, to gather all arguments into array args:

          function sumAll(...args) { // args is the name for the array
            let sum = 0;

            for (let arg of args)
              sum += arg;
              return sum;
          }

          alert( sumAll(1) ); // 1
          alert( sumAll(1, 2) ); // 3
          alert( sumAll(1, 2, 3) ); // 6

 What problem does bind solve in Javascript? How does it accomplish this?
 Usually we apply bind to fix "this" in an object method, so that we can pass it somewhere. For example, to setTimeout.

        let user = {
          firstName: "John",
          say(phrase) {
            alert(`${phrase}, ${this.firstName}!`);
          }
        };
        let say = user.say.bind(user);
        say("Hello"); ==> Hello, John ("Hello" argument is passed to say)
        say("Bye"); ==> Bye, John ("Bye" is passed to say)

 What does the length attribute refer to in a Function in Javascript?
 Length is a built-in property. It refers to the number of arguments. Rest parameter is not counted (if there is one). Another built-in property in a JavaScript Function is the name property.

  Explain the differences between a Function Expression and Function Declaration
  A Function Expression is created when the execution reaches it and is usable from then on — it is not hoisted.

          var sum = function(a, b) {
            return a + b;
          }

A Function Declaration can be called both before and after it was defined — it is hoisted.

          function sum(a, b) {
            return a + b;
          }

What are the 7 different JS types?
There are 7 built-in types: null, undefined , boolean, number, string, object and symbol     

What are falsy values in JS?
Falsy values: "", 0, null, undefined, NaN, false.

Does JS assign variables by value or by reference?
Simple values (also known as primitives) are always assigned by value-copy: null, undefined , boolean, number, string and ES6 symbol.
Compound values always create a copy of the reference on assignment: objects, which includes arrays, and functions.     

How does prototypal inheritance work?
There are three different kinds of prototypal inheritance:
1. Prototype delegation — A delegate prototype is an object which is used as a model for another object. When you inherit from a delegate prototype, the new object gets a reference to the prototype and its properties.
This process is usually accomplished by using Object.create().
2. Concatenative inheritance — The process of inheriting properties from one object to another by copying the object’s prototype properties, without retaining a reference between them.
This process is usually accomplished by using Object.assign().
3. Functional inheritance — This process makes use of a factory function()to create an object, and then adds new properties directly to the created object.
This process has the benefit of allowing data encapsulation via closure.
()Factory function is a function that is not a class or constructor that returns an object without using the new keyword.

 What's the JS Global Object?
In a browser it is named “window”, for Node.JS it is “global”, for other environments it may have another name.
It does two things:
1. Provides access to built-in functions and values, defined by the specification and the environment. For instance, we can call alert directly or as a method of window:

          alert("Hello");

          // the same as
          window.alert("Hello");

2. Provides access to global Function Declarations and var variables. We can read and write them using its properties, for instance:

          var phrase = "Hello";

          function sayHi() {
            alert(phrase);
          }

          // can read from window
          alert( window.phrase ); // Hello (global var)
          alert( window.sayHi ); // function (global function declaration)

          // can write to window (creates a new global variable)
          window.test = 5;

          alert(test); // 5

Explain Object.assign()
The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

          const object1 = {
            a: 1,
            b: 2,
            c: 3
          };

          const object2 = Object.assign({c: 4, d: 5}, object1);

          console.log(object2.c, object2.d);
          // expected output: 3 5

Explain Object.create()
The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

          const person = {
            isHuman: false,
            printIntroduction: function () {
              console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
            }
          };

          const me = Object.create(person);

          me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
          me.isHuman = true; // inherited properties can be overwritten

What is a Promise?
Check this great article for more detailed explanation https://javascript.info/promise-basics
The constructor syntax for a promise object is:

          let promise = new Promise(function(resolve, reject) {
            // executor (the producing code, "singer")
          });

The function passed to new Promise is called the executor. When the promise is created, this executor function runs automatically.The resulting promise object has internal properties:

1. state — initially “pending”, then changes to either “fulfilled” or “rejected”,
2. result — an arbitrary value of your choosing, initially undefined.

When the executor finishes the job, it should call one of the functions that it gets as arguments:

1. resolve(value) — to indicate that the job finished successfully:
     - sets state to "fulfilled",
     - sets result to value.
2. reject(error) — to indicate that an error occurred:
     - sets state to "rejected",
     - sets result to error.

What arguments does the Promise object take?
It takes resolve and reject

What arguments does the resolve function take?
It takes onFulfilled

What arguments does .then take?
It takes onFulfilled and onRejected

 What is Promise Chaining?
 Promise Chaining is when we chain a promise after a promise is settled. The whole thing works, because a call to promise.then returns a promise, so that we can call the next .then on it.
When a handler returns a value, it becomes the result of that promise, so the next .then is called with it.

 How can you suspend the execution of a .then statement?
 Normally, a value returned by a .then handler is immediately passed to the next handler. But there’s an exception.
If the returned value is a promise, then the further execution is suspended until it settles. After that, the result of that promise is given to the next .then handler.

When would you want to use Promise.resolve()?
    let promise = Promise.resolve(value); ==> Returns a resolved promise with the given value.
Same as:
    let promise = new Promise(resolve => resolve(value));
The method is used when we already have a value, but would like to have it “wrapped” into a promise.
For instance, the loadCached function below fetches the url and remembers the result, so that future calls on the same URL return it immediately:

        function loadCached(url) {
          let cache = loadCached.cache || (loadCached.cache = new Map());

          if (cache.has(url)) {
            return Promise.resolve(cache.get(url)); // (****)
          }

          return fetch(url)
            .then(response => response.text())
            .then(text => {
              cache.set(url,text);
              return text;
            });
        }

We can use loadCached(url).then(…), because the function is guaranteed to return a promise. That’s the purpose Promise.resolve in the line (****): it makes sure the interface unified. We can always use .then after loadCached.

Explain how Promise.all works.
The method to run many promises in parallel and wait till all of them are ready.
The syntax is:

      let promise = Promise.all(iterable);
It takes an iterable object with promises, technically it can be any iterable, but usually it’s an array, and returns a new promise. The new promise resolves with when all of them are settled and has an array of their results.
For instance, the Promise.all below settles after 3 seconds, and then its result is an array [1, 2, 3]:

       Promise.all([
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)), // 1
        new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)), // 2
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))  // 3
      ]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member

What happens when you pass a non-promise object in the iterable you pass to Promise.all?
Normally, Promise.all(iterable) accepts an iterable (in most cases an array) of promises. But if any of those objects is not a promise, it’s wrapped in Promise.resolve.
For instance, here the results are [1, 2, 3]:

       Promise.all([
        new Promise((resolve, reject) => {
          setTimeout(() => resolve(1), 1000)
        }),
        2, // treated as Promise.resolve(2)
        3  // treated as Promise.resolve(3)
      ]).then(alert); // 1, 2, 3

So we are able to pass non-promise values to Promise.all where convenient.

What is Promise.race?
Similar to Promise.all takes an iterable of promises, but instead of waiting for all of them to finish – waits for the first result (or error), and goes on with it.
The syntax is:

      let promise = Promise.race(iterable);

For instance, here the result will be 1:

       Promise.race([
        new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
        new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
        new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
      ]).then(alert); // 1

So, the first result/error becomes the result of the whole Promise.race. After the first settled promise “wins the race”, all further results/errors are ignored.

What does the async keyword do?
The word “async” before a function means one simple thing: a function always returns a promise. If the code has return <non-promise> in it, then JavaScript automatically wraps it into a resolved promise with that value.

For instance, this code returns a resolved promise with the result of 1, let’s test it:

           async function f() {
            return 1;
          }

          f().then(alert); // 1

What does the await keyword do?
The keyword await makes JavaScript wait until that promise settles and returns its result. Here’s example with a promise that resolves in 1 second:

          async function f() {

            let promise = new Promise((resolve, reject) => {
              setTimeout(() => resolve("done!"), 1000)
            });

            let result = await promise; // wait till the promise resolves (****)

            alert(result); // "done!"
          }
          f();

The function execution “pauses” at the line (****) and resumes when the promise settles, with result becoming its result. So the code above shows “done!” in one second.
Let’s emphasize: await literally makes JavaScript wait until the promise settles, and then go on with the result. That doesn’t cost any CPU resources, because the engine can do other jobs meanwhile: execute other scripts, handle events etc.
It’s just a more elegant syntax of getting the promise result than promise.then, easier to read and write.
