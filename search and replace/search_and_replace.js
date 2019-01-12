function myReplace(str, before, after) {
  // convert both before and after to upper/lower case
  let beforeU = before.replace(before.charAt(0),before.charAt(0).toUpperCase());
  let beforeL = before.replace(before.charAt(0),before.charAt(0).toLowerCase());
  let afterU = after.replace(after.charAt(0),after.charAt(0).toUpperCase());
  let afterL = after.replace(after.charAt(0),after.charAt(0).toLowerCase());

  let newStr = str.replace(beforeU, afterU);
  newStr = newStr.replace(beforeL,afterL);
  console.log(newStr);
  return newStr;
}

myReplace("Let us go to the store", "store", "mall")