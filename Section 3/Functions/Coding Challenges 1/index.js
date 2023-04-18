// create a arrow funciton:

// Note: We can have multiple paramters in an arrow function

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolhins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolhins, scoreKoalas);

const checkWinner = function(avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win! (${avgDolhins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Dolphins win! (${avgDolhins} vs ${avgKoalas})`);
    } else {
        console.log(`No one wins!`);
    }
}

checkWinner(scoreDolhins, scoreKoalas);

checkWinner(123, 22);

// Remeber: checkWinner function here..is independent funciton..it dowsnt matter where the values are coming form..as long as it is getting the values its all good.

// So remember..all funciton are independent of each other..

