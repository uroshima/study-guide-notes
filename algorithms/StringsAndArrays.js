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
