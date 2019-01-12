const sumPrimes = require('./sum_all_primes.js');

// sumPrimes(10) should return a number.
test('sumPrimes(10) should return a number.', () => {
    expect(typeof sumPrimes(1)).toBe("number"); 
  });

// sumPrimes(10) should return 17.
test('sumPrimes(10) should return 17.', () => {
    expect(sumPrimes(10)).toBe(17); 
  });

// sumPrimes(977) should return 73156.
test('sumPrimes(977) should return 73156.', () => {
    expect(sumPrimes(977)).toBe(73156); 
  });

