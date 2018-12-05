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

// Write a method to replace all spaces in a string with '20%'
function URLify(str1) {
  let result = '';
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] == ' ') {
      result += '20%';
    } else {
      result += str1[i];
    }
  }
  return result;
}
// Time Complexity is O(n)

// Given a string, write a function to check if it is a permutation of a palindrome
function palindromePermutation(str1) {
  let myObj = {};
  let len = str1.length;
  for (let i = 0; i < str1.length; i++) {
    if (!myObj[str1[i]]) {
      myObj[str1[i]] = 1;
    } else {
      myObj[str1[i]]++;
    }
  }
  let odds = 0;
  for (var key in myObj) {
    if (len % 2 == 0 && myObj[key] % 2 == 1) {
      return false;
    } else if (len % 2 == 1 && odds > 1) {
      return false;
    } else if (len % 2 == 1 && myObj[key] % 2 == 1) {
      odds++;
    }
  }
  return true;
}
// Time Complexity is O(n + k) ==> O(n)
