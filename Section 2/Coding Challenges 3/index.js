// 1 Challenge - Calc Avg

// const avgScoreDolphins = (96 + 108 + 89) / 2;
// const avgScoreKoalas = (88 + 91 + 110) / 2;

// console.log('avgScoreDolphins', avgScoreDolphins);
// console.log('avgScoreKoalas', avgScoreKoalas);

// if (avgScoreDolphins > avgScoreKoalas) {
//     console.log('Hurray! Dolphins have won the game!');
// }else if (avgScoreKoalas > avgScoreDolphins) {
//     console.log('Hurray! koalas have won the game!');
// } else {
//     console.log('Oh No! Its a Draw');
// }

// Bonus 1 :

const avgScoreDolphins = (97 + 112 + 80) / 3;
const avgScoreKoalas = (109 + 95 + 50) / 3;

console.log('avgScoreDolphins', avgScoreDolphins);
console.log('avgScoreKoalas', avgScoreKoalas);

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
    console.log('Hurray! Dolphins have won the game!');
} else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
    console.log('Hurray! koalas have won the game!');
} else if (avgScoreDolphins === avgScoreKoalas && avgScoreDolphins >=100 && avgScoreKoalas >= 100) {
    console.log('Both Win the trophy');
} else {
    console.log('No one wins the trophy!');
}

