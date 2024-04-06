import { winnerTester } from '../WinnerTester/WinnerTester';
import { winnerModal } from '../WinnerModal/WinnerModal';

export const endGameTester = (table) => {
  const isTableFull = Object.values(table).every((square) => square !== null);
  const winner = winnerTester(table);

  if (isTableFull && !winner) {
    const game = document.querySelector('article');
    game.appendChild(winnerModal()); // Modal de empate
  } else if (winner) {
    const game = document.querySelector('article');
    game.appendChild(winnerModal(winner)); // Modal de ganador
  }
};
