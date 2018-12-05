// Implement an algorithm to determine if string has all unique characters
function isUnique(str) {
  let myObj = new Object();
  for (let i = 0; i < str.length; i++) {
    if (myObj[str[i]]) {
      return false;
    } else {
      myObj[str[i]] = true;
    }
  }
  return true;
}
// Time Complexity is O(n)

// Given two strings, write a method to decide if one is permutation of the other
function checkPermutation(str1, str2) {
  let myStr1 = {};
  let myStr2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (myStr1[str1[i]]) {
      myStr1[str1[i]] += 1;
    } else {
      myStr1[str1[i]] = 1;
    }
  }
    for (let j = 0; j < str2.length; j++) {
    if (myStr2[str2[j]]) {
      myStr2[str2[j]] += 1;
    } else {
      myStr2[str2[j]] = 1;
    }
  }
  for (var key in myStr1) {
    if (myStr1[key] != myStr2[key]) {
      return false;
    }
  }
  return true;
}
// Time Complexity is O(2n + k) => O(n)
