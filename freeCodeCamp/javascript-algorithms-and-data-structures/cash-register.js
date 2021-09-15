function checkCashRegister(price, cash, cid) {

  var value = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  var quantity = [0, 0, 0, 0, 0, 0, 0, 0, 0]

  var diff = cash - price;
  var copyCid = [...cid];

  for(let i = copyCid.length - 1; i >= 0; i--) {
    while(diff >= value[i] && copyCid[i][1] >= value[i]) {
        diff = Math.round((diff + Number.EPSILON) * 100) / 100 - 
          Math.round((value[i] + Number.EPSILON) * 100) / 100;
        copyCid[i][1] = Math.round((copyCid[i][1] + Number.EPSILON) * 100) / 100 - 
          Math.round((value[i] + Number.EPSILON) * 100) / 100;
        quantity[i]++;
    }
  }

  if(diff === 0) {
    let change = [];
    if(copyCid.every((value) => value[1] === 0)) {
       for(let i = 0; i < quantity.length; i++)
        change.push([copyCid[i][0], quantity[i] * value[i]])  
      return { status: "CLOSED", change: change };
    }
    for(let i = quantity.length - 1; i >= 0; i--)
      if(quantity[i] > 0)
        change.push([copyCid[i][0], quantity[i] * value[i]])    
    if(copyCid.every((value) => value[1] === 0))
      return { status: "CLOSED", change: change };
    cid = copyCid;
    return { status: "OPEN", change: change };
  } else if(diff >= 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] }
  }

  return change;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
