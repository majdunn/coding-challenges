function orbitalPeriod(arr) {
    let newArr = [];
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    
    for (let i = 0; i < arr.length; i++) {
        let thisName = arr[i].name;
        let thisavgAlt = arr[i].avgAlt;
        let T = Math.round(((Math.sqrt(((Math.pow((earthRadius + thisavgAlt),3)))/GM))) * Math.PI * 2);
        var obj = {name:thisName, orbitalPeriod: T};
        newArr.push(obj);
        console.log(thisName, thisavgAlt);
        console.log(T);
    }
    console.log(newArr);
    return newArr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  // [{name: "sputnik", orbitalPeriod: 86400}]
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
  // [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
module.exports = orbitalPeriod;