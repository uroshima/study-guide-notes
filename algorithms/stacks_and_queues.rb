# How would you design a stack which in addition to push and pop has also a function min
# which returns the minimun element? All the functions should operate in O(1) time
# Solution: We gonna use additional stack to keep track of the min element
class Stack
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

  def pop()
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
