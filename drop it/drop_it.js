function dropElements(arr, func) {
  let droppedArr = [...arr];
  let i = 0;
  while (i < droppedArr.length) {
    console.log("ITERATION FOR: ", droppedArr[i]);
    if (func(droppedArr[i])) {
      console.log("TRUE! Stopping");
      console.log("droppedArr: ", droppedArr);
      return droppedArr;
    } else {
      droppedArr.splice(i, 1);
      i = 0;
      console.log("FALSE! droppedArr: ", droppedArr);
    }
  }
  return droppedArr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
module.exports = dropElements;
