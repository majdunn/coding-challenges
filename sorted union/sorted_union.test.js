const uniteUnique = require('./sorted_union.js');

test('sort result 1', () => {
    expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([1, 3, 2, 5, 4]);
  });
    
    test('sort result 2', () => {
      expect(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])).toEqual([1, 3, 2, [5], [4]]);  
    });

    test('sort result 3', () => {
      expect(uniteUnique([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);  
    });

    test('sort result 4', () => {
      expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual([1, 2, 3, 5, 4, 6, 7, 8]);  
    });
    

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
// uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
