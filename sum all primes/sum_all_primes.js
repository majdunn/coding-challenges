function sumPrimes(num) {
  function isPrime(n) {
    if (n <= 1) {
      return false;
    } else if (n <= 3) {
      return true;
    } else if (n % 2 == 0 || n % 3 == 0) {
      return false;
    }

    let i = 5;
    while (i * i <= n) {
      if (n % i == 0 || n % (i + 2) == 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }

  let a = 0;
  let total = 0;
  while (a <= num) {
    if (isPrime(a)) {
      total += a;
    }
    a++;
  }
  return total;
}

sumPrimes(10);

module.exports = sumPrimes;
