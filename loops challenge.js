// Previous code Logic
// let bill;
// bill = 40;

// let tip = bill >= 50 && bill <=300 ? bill * 15/100 : bill * 20 / 100;
// console.log(tip);
// const totalValue = bill + tip;
// console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${totalValue}`);

const calcTip = function (billVal) {
  const tip =
    billVal >= 50 && billVal <= 300
      ? (billVal * 15) / 100
      : (billVal * 20) / 100;
  return tip;
};
// console.log(calcTip(100));

// Arrays:

// const bills = [125, 555, 44];

// const tips1 = calcTip(bills[0]);
// const tips2 = calcTip(bills[1]);
// const tips3 = calcTip(bills[2]);

// const tips = [tips1, tips2, tips3];
// console.log(tips);

// const total = bill + tip;
// const total = [bills[0] + tips1, bills[1] + tips2, bills[2] + tips3];
// console.log(total);

// Create bills array

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Create empty array for tips and totals
let tips = [];
let totals = [];

// Use calcTip() to calc the tips and also calc total bill value
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}
console.log('bills', bills);
console.log('tips', tips);
console.log('totals', totals);

// Create calcAverage()
// Avg = sum of all the nos in an array
const calcAverage = function (arr) {
  let sum = 0;
  for (let m = 0; m < arr.length; m++) {
    sum += arr[m];
    // let avg = sum / arr.length
    // return avg;
  }
  console.log('sum', sum);
  return sum / arr.length;
};
console.log(Math.trunc(calcAverage(totals)));
console.log(Math.trunc(calcAverage(tips)));
// console.log(calcAverage([2,3,7]));

// TODO
