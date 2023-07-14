const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
// Our way of doing the challenge -
// const scoredArray = [...game.scored];
// console.log([...scoredArray.entries()]);

// for ([index, value] of scoredArray.entries()) {
//   console.log(`Goal ${index + 1}: ${value}`);
// }

// From the udemy comment section -

for (const [i, player] of game.scored.entries()) {
  // console.log(`Goal ${i + 1}: ${player}`);
}

// Another way -

for (let [index, value] of Object.entries(game.scored)) {
  index = Number(index); // Converting string index into number
  // console.log(`Goal ${index + 1}: ${value}`);
}

// 2.  "Use a loop to calculate the average value of the odds property and log it to the console[...]" or something like that.
// Avg  =  sum of 3 nos  / 3

let sum = 0;
for (const val of Object.values(game.odds)) {
  sum += val;
}
// console.log(sum / Object.values(game.odds).length); // Avg of odds

// 3.

// Get the team name-

for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);
  const teamStr = team === 'x' ? 'Draw' : game[team];
  // console.log(`Odd of Victory for ${teamStr} : ${odd}`);
  // console.log(game[team]);
}
/// Team = team1,team2
// game[team] = this works becoz team is having 3 values..and the draw value gets discarded becoz of the ternary opertor..right..So we have only 2 conditions left..team = team1, team2..
// So on first iteration..we get game[team1] = Bayern Munich..and on 2nd iteration we get..game[team2] = Borrusia Dortmund

// Bonus challenge -

// const scorers = {};

// for (let [index, value] of Object.entries(game.scored)) {
//   index = Number(index); // Converting string index into number
//   console.log(`Goal ${index + 1}: ${value}`);
// }
