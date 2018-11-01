Why is binary search logarithmic time?
We basically ignore half of the elements just after one comparison.

If an element is smaller than its right neighbors, explain why there is definitely a peak to the right.
Because if the element right of the right neighbor is smaler than the right neighbor, then thats our target,
if not, that means is bigger and the same applies to that number. At the end if every number on the right is bigger than its neighbor on the left, then the last number has to be a peak.

Check this link for Binary Search if the array is rotated http://blog.gainlo.co/index.php/2017/01/12/rotated-array-binary-search/

How does Interpolation Search Work? What is the time complexity?
The Interpolation Search is an improvement over Binary Search for instances, where the values in a sorted array are uniformly distributed. Binary Search always goes to the middle element to check. On the other hand, interpolation search may go to different locations according to the value of the key being searched. For example, if the value of the key is closer to the last element, interpolation search is likely to start search toward the end side.
Time Complexity: If elements are uniformly distributed, then O (log log n)). In worst case it can take upto O(n).
