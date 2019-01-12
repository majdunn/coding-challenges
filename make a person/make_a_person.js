var Person = function(firstAndLast) {
  
    let arrName = firstAndLast.split(" ");
    let firstname = arrName[0];
    let lastname = arrName[1];
    let fullname = firstAndLast;

  this.getFirstName = function() {
      return firstname;
  };

  this.getLastName = function() {
      return lastname;
  };

  this.getFullName = function() {
    return firstname + " " + lastname;
  };

  this.setFirstName = function(first) {
    firstname = first;
  };

  this.setLastName = function(last) {
    lastname = last;
  };

  this.setFullName = function(firstAndLast) {
    let arr = firstAndLast.split(" ");
    firstname = arr[0];
    lastname = arr[1];
  };
  
  return fullname;
};

var bob = new Person("Bob Ross");
bob.getFullName();

module.exports = Person;
