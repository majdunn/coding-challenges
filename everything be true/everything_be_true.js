function truthCheck(collection, pre) {
    return collection.every(x => (x.hasOwnProperty(pre) && x[pre]));
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

module.exports = truthCheck;