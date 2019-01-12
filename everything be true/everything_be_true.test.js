const truthCheck = require('./everything_be_true.js');

test('truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.', () => {
    expect(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")).toBe(true); 
  });

  
  test('truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.', () => {
    expect(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")).toBe(false); 
  });
  
  test('truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.', () => {
    expect(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")).toBe(false); 
  });
  
  test('truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") should return false', () => {
    expect(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")).toBe(false); 
  });
  
  test('truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") should return true', () => {
    expect(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")).toBe(true); 
  });
  
  test('truthCheck([{"single": "yes"}], "single") should return true', () => {
    expect(truthCheck([{"single": "yes"}], "single")).toBe(true); 
  });
  
  test('truthCheck([{"single": ""}, {"single": "double"}], "single") should return false', () => {
    expect(truthCheck([{"single": ""}, {"single": "double"}], "single")).toBe(false); 
  });
  
  test('truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false', () => {
    expect(truthCheck([{"single": "double"}, {"single": undefined}], "single")).toBe(false); 
  });
  
  test('truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false', () => {
    expect(truthCheck([{"single": "double"}, {"single": NaN}], "single")).toBe(false); 
  });
  
