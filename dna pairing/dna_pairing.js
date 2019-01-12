function pairElement(str) {
  var map = Array.prototype.map;
  let arr = map.call(str, function(a) {
    let char = a.charAt(0);
    //console.log(char);
    if (char == "A") {
      return ["A", "T"];
    }
    if (char == "T") {
      return ["T", "A"];
    }
    if (char == "C") {
      return ["C", "G"];
    }
    if (char == "G") {
      return ["G", "C"];
    }
  });

  return arr;
}

// TESTING
function compare(arr1, arr2) {
    arrTest1 = arr1.map(e => e.toString()).sort((a, b) => (a.attr > b.attr) - (a.attr < b.attr)).toString();
    arrTest2 = arr2.map(e => e.toString()).sort((a, b) => (a.attr > b.attr) - (a.attr < b.attr)).toString();

  if (arrTest1 == arrTest2) {
    console.log("TEST PASSED");
  } else {
    console.log("TEST FAILED");
  }
  console.log("TEST RESULT: " + arr1 + " is matched to " + arr2);
}

// pairElement("GCG") should return [["G", "C"], ["C","G"],["G", "C"]].
let testArr = new Array([["G", "C"], ["C", "G"], ["G", "C"]]);
compare(pairElement("GCG"), testArr);

// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
testArr = new Array([
  ["A", "T"],
  ["T", "A"],
  ["C", "G"],
  ["G", "C"],
  ["A", "T"]
]);
compare(pairElement("ATCGA"), testArr);

// pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
testArr = new Array([
  ["T", "A"],
  ["T", "A"],
  ["G", "C"],
  ["A", "T"],
  ["G", "C"]
]);
compare(pairElement("TTGAG"), testArr);

// pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
testArr = new Array([
  ["C", "G"],
  ["T", "A"],
  ["C", "G"],
  ["T", "A"],
  ["A", "T"]
]);
compare(pairElement("CTCTA"), testArr);

module.exports = pairElement;