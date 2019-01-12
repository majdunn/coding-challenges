function steamrollArray(arr) {
  
    let flat = [...arr];
    for (let i = 0; i < flat.length; i++) {
        if (Array.isArray(flat[i])) { 
            let nest = flat[i];
            flat.splice(i,1);
            for (let j = 0; j < nest.length; j++) {
                flat.splice(i+j,0,nest[j]);
            }
            i = -1; 
        } else {
            console.log("leave this one alone");
        }      
    }

  return flat;
}

steamrollArray([
    [
        ["a"]
    ], 
    [
        ["b"]
    ]
]);

module.exports = steamrollArray;
