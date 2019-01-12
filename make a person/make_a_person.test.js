const Person = require('./make_a_person.js');



// Object.keys(bob).length should return 6.
test('Object.keys(bob).length should return 6.', () => {
    var bob = new Person('Bob Ross');
    expect(Object.keys(bob).length).toBe(6); 
  });

// bob instanceof Person should return true.
test('bob instanceof Person should return true.', () => {
    var bob = new Person('Bob Ross');
    expect(bob instanceof Person).toBe(true); 
  });

// bob.firstName should return undefined.
test('bob.firstName should return undefined.', () => {
    var bob = new Person('Bob Ross');
    expect(bob.firstName).toBe(undefined); 
  });

// bob.lastName should return undefined.
test('bob.lastName should return undefined.', () => {
    var bob = new Person('Bob Ross');
    expect(bob.lastName).toBe(undefined); 
  });

// bob.getFirstName() should return "Bob".
test('bob.getFirstName() should return "Bob".', () => {
    var bob = new Person('Bob Ross');
    expect(bob.getFirstName()).toBe("Bob"); 
  });

// bob.getLastName() should return "Ross".
test('bob.getLastName() should return "Ross".', () => {
    var bob = new Person('Bob Ross');
    expect(bob.getLastName()).toBe("Ross"); 
  });

// bob.getFullName() should return "Bob Ross".
test('bob.getFullName() should return "Bob Ross".', () => {
    var bob = new Person('Bob Ross');
    expect(bob.getFullName()).toBe("Bob Ross"); 
  });

  // bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
  test('bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").', () => {
      var bob = new Person('Bob Ross');
      bob.setFirstName("Haskell");
    expect(bob.getFullName()).toBe("Haskell Ross"); 
  });

  // bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
  test('bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").', () => {
      var bob = new Person('Bob Ross');
      bob.setLastName("Curry");
    expect(bob.getFullName()).toBe("Haskell Curry"); 
  });

// bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
test('bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").', () => {
    var bob = new Person('Bob Ross');
    bob.setFullName("Haskell Curry");
    expect(bob.getFullName()).toBe("Haskell Curry"); 
  });

// bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
test('bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").', () => {
    var bob = new Person('Bob Ross');
    bob.setFullName("Haskell Curry");
    expect(bob.getFirstName()).toBe("Haskell"); 
  });

// bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
test('bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").', () => {
    var bob = new Person('Bob Ross');
    bob.setFullName("Haskell Curry");
    expect(bob.getLastName()).toBe("Curry"); 
  });
