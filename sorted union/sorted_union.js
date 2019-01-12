function uniteUnique(arr) {
  let newArr = arguments[0];

  [].forEach.call(arguments, e1 => {
    console.log("element: ", e1);
    e1.forEach(e2 => !newArr.includes(e2) ? newArr.push(e2) : console.log("not found"));
  });

  console.log("newArr: ", newArr);
  return newArr;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
module.exports = uniteUnique;

// PASSED FIRST ATTEMPT
// function uniteUnique(arr) {
//   let newArr = arguments[0];

//   for (let i = 1; i < arguments.length; i++) {

//     let arrA = arguments[i];
//     for (let j = 0; j < arrA.length; j++) {
//       if (!newArr.includes(arrA[j])) {
//         newArr.push(arrA[j]);

//       } else {

//       }
//     }

//   }

//   return newArr;
// }
