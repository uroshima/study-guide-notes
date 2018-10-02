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
