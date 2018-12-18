# How would you design a stack which in addition to push and pop has also a function min
# which returns the minimun element? All the functions should operate in O(1) time
# Solution: We gonna use additional stack to keep track of the min element
class Stack
  attr_reader :elements, :length

  def initialize
    @elements = []
    @length = 0
    @mins = []
  end

  def push(el)
    @elements << el
    @length += 1
    @mins << el if @mins.empty? || el <= @mins.last
    @elements
  end

  def pop
    last = @elements.pop()
    @length -= 1
    @mins.pop() if last == self.min
    @elements
  end

  def min
    return nil if @mins.empty?
    @mins.last
  end
end



# SetOfStacks should be composed of several stacks and should create a new stack
# once the previous one exceeds capacity.Also implement a function popAt(index)
# which performs a pop operation on a specific sub-stack.
class SetOfStacks
  attr_reader :current_stack, :set

  def initialize(capacity)
    @current_stack = Stack.new
    @set = []
    @capacity = capacity
    @set << @current_stack
  end

  def push(el)
    if @current_stack.length == @capacity
      @current_stack = Stack.new
      @set << @current_stack
    end
    @current_stack.push(el)
    @set
  end

  def pop
    if @current_stack.length == 0
      @set.pop()
      @current_stack = @set.last
    end
    @current_stack.pop()
  end

  def popAt(index)
    if @set[index] == nil
      p "No such a stack"
    else
      @set[index].pop()
    end
  end
end


# Write a program to sort a stack such that the smallest items are on the top. You can use additional
# temporary stack but you may not copy the elements into any other data structure such as an array.
# The stack supports the following operations: push, pop, peek, isEmpty
def sort(s)
  r = Stack.new
  while !s.isEmpty()
    # Insert each element in s in sorted order into r
    temp = s.pop()
    while !r.isEmpty() && r.peek() > temp
      s.push(r.pop())
    end
    r.push(temp)
  end
  # Copy the elements from r back to s
  while !r.isEmpty()
    s.push(r.pop())
  end
  return s
end
# This algorithm is O(n^2) time and O(n) space 
