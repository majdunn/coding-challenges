function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let closed = [...cid];

  let currency = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
  ];

  cid = cid.reverse();

  let cashDue = [];
  for (let i = 0; i < currency.length; i++) {
    let addCurrency = 0;
    console.log(
      "cid: ",
      cid[i][1],
      "currency: ",
      currency[i][1],
      "change due:",
      changeDue
    );

    while (changeDue >= currency[i][1] && currency[i][1] <= cid[i][1]) {
      let newCash = Math.round(100 * (cid[i][1] - currency[i][1])) / 100;
      cid.splice(i, 1, [currency[i][0], newCash]);
      addCurrency = Math.round(100 * (addCurrency + currency[i][1])) / 100;
      changeDue = Math.round(100 * (changeDue - currency[i][1])) / 100;
      if (cid[i][0] == "PENNY" && cid[i][1] < 0.01 && changeDue == 0) {
        let change = {
          status: "CLOSED",
          change: closed
        };
        console.log("your change is: ", change);
        console.log(" END ");
        console.log(" ");
        return change;
      } else if (cid[i][0] == "PENNY" && cid[i][1] < 0.01) {
        let change = {
          status: "INSUFFICIENT_FUNDS",
          change: []
        };
        console.log("your change is: ", change);
        console.log(" END ");
        console.log(" ");
        return change;
      }
    }
    if (addCurrency > 0) {
      cashDue.push([currency[i][0], addCurrency]);
    }

    if (changeDue == 0) {
      let change = {
        status: "OPEN"
      };
      change.change = cashDue;
      console.log("your change is: ", change);
      console.log(" END ");
      console.log(" ");
      return change;
    }
  }

  console.log(" END ");
  console.log(" ");
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0]
]);
// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
