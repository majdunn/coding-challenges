function addTogether() {
    let sum = 0;
    if (Number.isFinite(arguments[0]) && Number.isFinite(arguments[1])) {
        return arguments[0] + arguments[1];
    } else if (arguments.length > 1) {
        return undefined;
    } else if (Number.isFinite(arguments[0])) {
        sum += arguments[0];
        return function(arg) {            
            if (Number.isFinite(arg)) {
                return sum += arg;
            } else {
                return undefined;
            }
        }
    } else {
        return undefined;
    }
  }
  
  addTogether(2,"3");
module.exports = addTogether;