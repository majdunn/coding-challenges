function sumFibs(num) {
  let a = 0;
  let b = 1;
  let total = 0;
  while (a <= num) {
    if (a % 2 != 0) {
      total += a;
    }
    let c = a + b;
    a = b; 
    b = c;
  }
  return total;
}

// TESTING
sumFibs(1000);

module.exports = sumFibs;
