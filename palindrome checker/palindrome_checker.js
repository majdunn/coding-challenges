function palindrome(str) {
  let arr = str.toLowerCase().match(/[A-Za-z0-9]/gi);
  let strForward = arr.join();
  let strReverse = arr.reverse().join();

  if (strForward === strReverse) {return true;}

  return false;
}

palindrome("eyea");
module.exports = palindrome;
