// . In his country, it's usual to tip 15% if the bill value is between 50 and  
// 300. If the value is different, the tip is 20%.

// const bill = 275;
// const tipPercentage = bill * 15 / 100;

let bill;
bill = 40;
let tip = bill >=50 && bill <=300 ? bill * 15/100 : bill * 20 / 100;
console.log(tip);
const totalValue = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${totalValue}`);