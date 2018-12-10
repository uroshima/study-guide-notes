# A linked list is a data structure that consists of a collection of nodes that represent a sequence. Each element in a linked list will contain a datum and a reference to the next element in the linked list (a pointer).
# In Ruby it makes most sense to use arrays due to built-in methods such as shift, unshift, enq, deq, push and pop, but it is helpful to know why linked lists can be beneficial.
# Linked lists’ biggest advantage over arrays in other languages is their ability to insert / remove list elements without reallocating or reorganization of the entire data structure. Arrays have indices, so deleting a value at index 0 for example requires every single item to be reindexed.
# The flip-side of this, however, is that performing operations requiring access to particular elements of a linked list can be cumbersome. For example, finding the last element of a linked list requires scanning every element of the list.
# Here are some additional advantages and disadvantages of linked lists:
# LL Pros:
#  - Dynamic – LL’s allocate the needed memory when the program is initiated and can can expand in real time without memory overload.
#  - Insertion and deletion is easy.
#  - It’s easy to building linear data structures such as stacks and queues with linked lists.
#
# LL Cons:
#  - Since each element holds a value and a pointer, it’s more memory intensive.
#  - You have to access nodes sequentially since that’s how they’re defined; furthermore they’re not stored continuously so it takes longer to access an element.
#  - With a singly-linked list it’s pretty much terrible to reverse traverse. Doubly-linked lists contain a pointer to the previous node as well but that’s even more memory intensive.
#
#   - Ruby Implementation
#  It makes sense to define two ruby classes in implementing a linked list in Ruby – one for each element, called Node, and the other for the list itself, called LinkedList.
#  Here is the first. Note that a Node is initialized with its own data point as well as a pointer to the next Node.

class Node
  attr_accessor :val, :next

  def initialize(val, next_node)
      @val = val
      @next = next_node
  end
end

# Next, the LinkedList class:

class LinkedList

  def initialize(val)
    @head = Node.new(val, nil)
  end

  def add(val)
    current = @head
    while current.next != nil
      current = current.next
    end
    current.next = Node.new(val, nil)
  end

  def delete(val)
    current.next = @head
    if current.val = val
      @head = current.next
    else
      while (current.next != nil) && (current.next.val != val)
        current = current.next
      end
      unless current.next == nil
        current.next = current.next.next
      end
    end
  end

  def return_list
    elements = []
    current = @head
    while current.next != nil
      elements << current
      current = current.next
    end
    elements << current
  end
end


# Write code to remove duplicates from an unsorted linked list
def remove_duplicates(node)
  hash = Hash.new()
  previous = nil
  while node != nil
    if hash[node]
      previous.next = node.next
    else
      hash[node] = node.val
      previous = node
    end
    node = node.next
  end
end
# Time is O(n)


# Implement an algorithm to find kth to the last element of a singly linked list
def kth_last(head, k)
  p1 = head.next
  p2 = head.next
  i = 1
  while i < k
    return nil if p2 == nil #out of bounds
    p2 = p2.next
    i += 1
  end

  while p2.next != nil
    p1 = p1.next
    p2 = p2.next
  end
  return p1
end
# Time is O(n)


# Implement an algorithm to delete a node in the middle (i.e. any node but the first and last node,
# not necessarily the exact middle) of a singly linked list, given only acces to that node
def delete_middle(node)
  if node == nil || node.next == nil
    return false # Failure
  end
  next_node = node.next
  node.val = next_node.val
  node.next = next_node.next
  return true
end
# Time is O(1)


# Write code to partition a linked list around a value x, such that all nodes less than x
# come before all nodes greater than or equal to x. If x is contained within the list, the values of x
# only need to be after the elements less than x. The partition element x can appear anywhere in the
# "right partition"; it does not need to appear between the left and right partitions.
def partition(node, x)
  new_list_head = node
  new_list_tail = node
  next_node = node.next
  while next_node != nil
    if next_node.val < x
      next_node.next = new_list_head
      new_list_head = next_node
    else
      new_list_tail.next = next_node
      new_list_tail = next_node
    end
    next_node = next_node.next
  end
  new_list_tail = nil
  return new_list_head
end
# Time is O(n)


# You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in
# reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers
# and returns the sum as a linked list
# This solution is not very clear, its from the book
def sum_lists(list1, list2, carry)

  if list1 == nil && list2 == nil && carry == 0
    return nil
  end

  result = Node.new()
  value = carry

  if list1 != nil
    value += list1.data
  end

  if list2 != nil
    value += list2.data
  end

  result.data = value % 10 #second digit of number

  # recursive
  if list1 != nil || list2 != nil
    more = sum_lists(list1 == nil ? nil : list1.next,
                     list2 == nil ? nil : list2.next,
                     value >= 10 ? 1 : 0)
    result.setNext(more)
  end

  return result
end
