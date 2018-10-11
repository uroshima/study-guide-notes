 What exactly is a Stack Overflow?
 If the base case is not reached, the memory is exhausted by these functions on stack and it will cause stack overflow error.

  Describe direct and indirect recursion
  A function is called direct recursive if it calls the same function. A function is called indirect recursive if it calls another function and that function calls our first function directly or indirectly.

 What is tail call recursion? Why is it helpful, if at all?
 A recursive function is tail recursive when recursive call is the last thing executed by the function.The tail recursive functions considered better than non tail recursive functions as tail-recursion can be optimized by compiler. The idea used by compilers to optimize tail-recursive functions is simple, since the recursive call is the last statement, there is nothing left to do in the current function, so saving the current function’s stack frame is of no use

  Discuss advantages/disadvantages of recursion
  Note that both recursive and iterative programs have same problem solving powers, i.e., every recursive program can be written iteratively and vice versa is also true. Recursive program has greater space requirements than iterative program as all functions will remain in stack until base case is reached. It also has greater time requirements because of function calls and return overhead.
  Recursion provides a clean and simple way to write code. Some problems are inherently recursive like tree traversals, Tower of Hanoi, etc. For such problems it is preferred to write recursive code. We can write such codes also iteratively with the help of stack data structure.

 How is memory allocated during recursive function calls?
 When any function is called from main(), the memory is allocated to it on stack. A recursive function calls itself, the memory for called function is allocated on top of memory allocated to calling function and different copy of local variables is created for each function call. When the base case is reached, the function returns its value to the function by whom it is called and memory is de-allocated and the process continues.

 What is the difference between Memoization and Tabulation?
 Memoization works in top down fashion (starts from the root of the tree) and Tabulation works in bottom up fashion
 
 Why is memoization helpful?
 Memoization is storing information and it helps with time complexity when some function is repeatedly being called. Instead of running that function again, we store the result the first time the function is called and then just look up that information
