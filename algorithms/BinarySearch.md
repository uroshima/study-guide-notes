Why is binary search logarithmic time?
We basically ignore half of the elements just after one comparison.

If an element is smaller than its right neighbors, explain why there is definitely a peak to the right.
Because if the element right of the right neighbor is smaler than the right neighbor, then thats our target,
if not, that means is bigger and the same applies to that number. At the end if every number on the right is bigger than its neighbor on the left, then the last number has to be a peak.
