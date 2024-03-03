import { winnerOptions } from '../../sources/sources';

export const winnerTester = (tableToCheck) => {
  for (const combo of winnerOptions) {
    const [a, b, c] = combo;
    if (
      tableToCheck[a] &&
      tableToCheck[a] === tableToCheck[b] &&
      tableToCheck[a] === tableToCheck[c]
    ) {
      return tableToCheck[a];
    }
  }
  return null;
};
