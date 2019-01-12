const smallestCommons = require('./smallest_common_multiple.js');

// smallestCommons([1, 5]) should return a number.
test('smallestCommons([1, 5]) should return a number.', () => {
    expect(typeof smallestCommons([1, 5])).toBe("number"); 
  });

// smallestCommons([1, 5]) should return 60.
test('smallestCommons([1, 5]) should return 60.', () => {
    expect(smallestCommons([1, 5])).toBe(60); 
  });

// smallestCommons([5, 1]) should return 60.
test('smallestCommons([5, 1]) should return 60.', () => {
    expect(smallestCommons([5, 1])).toBe(60); 
  });


// smallestCommons([2, 10]) should return 2520.
test('smallestCommons([2, 10]) should return 2520.', () => {
    expect(smallestCommons([2, 10])).toBe(2520); 
  });


// smallestCommons([1, 13]) should return 360360.
test('smallestCommons([1, 13]) should return 360360.', () => {
    expect(smallestCommons([1, 13])).toBe(360360); 
  });


// smallestCommons([23, 18]) should return 6056820.
test('smallestCommons([23, 18]) should return 6056820.', () => {
    expect(smallestCommons([23, 18])).toBe(6056820); 
  });

