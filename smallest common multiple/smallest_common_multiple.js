function smallestCommons(arr) {
  let lowerLimit, upperLimit;

  if (arr[0] < arr[1]) {
    lowerLimit = arr[0];
    upperLimit = arr[1];
  } else {
    lowerLimit = arr[1];
    upperLimit = arr[0];
  }
  console.log("lowerLimit, upperLimit: ", lowerLimit, upperLimit);

  let finalNum = lowerLimit * upperLimit;
  let gcfArr = [];
  gcfArr.push(...getFactors(upperLimit));
  gcfArr.push(...getFactors(lowerLimit));

  // for each number between lower and upper
  for (let i = lowerLimit + 1; i < upperLimit; i++) {
    
    // if it is already a factor, skip, else find factors to add
    if (!isFactor(finalNum, i)) {
      let gcfNumArr = getFactors(i);

      // find the number of matching factors in both arrays and add the missing ones

      // cycle through the factors for the current number
      for (let j = 0; j < gcfNumArr.length; j++) {

        let countNum = gcfNumArr.filter(x => x === gcfNumArr[j]).length;
        let countGcf = gcfArr.filter(x => x === gcfNumArr[j]).length;

        if (countNum > countGcf) {
          while (countGcf < countNum) {
            gcfArr.push(gcfNumArr[j]);
            countGcf++;
          }
          
        }

        gcfNumArr = gcfNumArr.map(x => x == gcfNumArr[j] ? x/x : x);
      }
    } else {
      console.log("is already a factor");
    }
    finalNum = gcfArr.reduce(getTotal, 1);
  }
  
  return finalNum;
}

function getFactors(num) {
  let gcf = [];

  if (num > 1) {
    while (num % 2 == 0) {
      num /= 2;
      gcf.push(2);
    }

    for (let i = 3; i <= Math.sqrt(num); i = i + 2) {
      while (num % i == 0) {
        gcf.push(i);
        num = num / i;
      }
    } 
    if (num > 2) {
      gcf.push(num);
    }
  }
  return gcf;
}

function isFactor(highNum, lowNum) {
  if (highNum > lowNum && highNum % lowNum == 0) {
    return true;
  } else {
    return false;
  }
}

function getTotal(total, x) {
  return total * x;
}

smallestCommons([23, 18]);

module.exports = smallestCommons;