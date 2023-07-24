const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.

// Convert maps into arrays

// const events = [...gameEvents];
// console.log(events);
// console.log(gameEvents.delete(64));
// console.log(gameEvents);

// Since the challenge was that we should not have any duplicates..so we should convert this map into sets..

console.log([...new Set(gameEvents.values())]);

// 3. 90 mins / NO of events = 90 / gameEvents.size
console.log(
  `An event happened,on average, every ${90 / gameEvents.size} minutes`
);

// 4.
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${key}: ${value}`);
}
