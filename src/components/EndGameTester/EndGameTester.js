import { winnerTester } from '../WinnerTester/WinnerTester';
import { winnerModal } from '../WinnerModal/WinnerModal';

export const endGameTester = (table) => {
  const isTableFull = Object.values(table).every((square) => square !== null);
  const winner = winnerTester(table);
  const game = document.querySelector('article');
  if (isTableFull && !winner) {
    game.appendChild(winnerModal());
  } else if (winner) {
    game.appendChild(winnerModal(winner));
  }
};
