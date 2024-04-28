import {
  CURRENT_PLAYER,
  setCurrentPlayer
} from '../../data/CURRENT_PLAYER/CURRENT_PLAYER';
import { endGameTester } from '../EndGameTester/EndGameTester';
import { winnerModal } from '../WinnerModal/WinnerModal';
import { winnerTester } from '../WinnerTester/WinnerTester';
import { handleTurn } from '../handleTurn/handleTurn';

export const printAndChange = (square, table) => {
  if (CURRENT_PLAYER === '' || square.querySelector('img')) {
    return;
  }
  const img$$ = document.createElement('img');
  img$$.src = `./assets/${CURRENT_PLAYER}.png`;
  const index = square.dataset.index;
  table[index] = CURRENT_PLAYER;
  square.appendChild(img$$);
  let player = CURRENT_PLAYER === 'logo' ? 'crash' : 'logo';
  setCurrentPlayer(player);
  handleTurn(player);
  setTimeout(() => {
    const winner = winnerTester(table);
    if (winner) {
      // const turns = document.querySelector('.turns');
      // turns.remove();
      const game = document.querySelector('article');
      game.appendChild(winnerModal(winner));
    }
    endGameTester(table);
  }, 0);
};
