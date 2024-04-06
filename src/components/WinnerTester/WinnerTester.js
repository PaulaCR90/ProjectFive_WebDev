import { winnerOptions } from '../../sources/sources';

export const winnerTester = (table) => {
  for (const combo of winnerOptions) {
    console.log('winnerTester');
    const [a, b, c] = combo;
    if (table[a] && table[a] === table[b] && table[a] === table[c]) {
      return table[a];
    }
  }
  return null;
};
