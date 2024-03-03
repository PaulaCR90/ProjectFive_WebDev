import { winnerModal } from '../WinnerModal/WinnerModal';
import { winnerTester } from '../WinnerTester/WinnerTester';

export const endGameTester = (tableToCheck, currentPlayer) => {
  const isTableFull = Object.values(tableToCheck).every(
    (square) => square !== null
  );
  if (isTableFull) {
    const winner = winnerTester(tableToCheck);
    if (!winner) {
      setTimeout(() => {
        const game = document.querySelector('article');
        game.appendChild(winnerModal(currentPlayer));
      }, 25);
    }
  }
};
