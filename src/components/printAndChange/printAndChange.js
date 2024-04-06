import {
  CURRENT_PLAYER,
  setCurrentPlayer
} from '../CURRENT_PLAYER/CURRENT_PLAYER';
import { endGameTester } from '../EndGameTester/EndGameTester';
import { winnerModal } from '../WinnerModal/WinnerModal';
import { winnerTester } from '../WinnerTester/WinnerTester';
import { handleTurn } from '../handleTurn/handleTurn';

export const printAndChange = (square, table) => {
  if (CURRENT_PLAYER === '') {
    return;
  }

  if (square.querySelector('img')) {
    return;
  }

  const img$$ = document.createElement('img');
  img$$.src = `../../public/assets/${CURRENT_PLAYER}.png`;
  img$$.alt = CURRENT_PLAYER;
  const index = square.dataset.index;
  table[index] = CURRENT_PLAYER;
  square.appendChild(img$$);
  let player = CURRENT_PLAYER === 'logo' ? 'crash' : 'logo';
  setCurrentPlayer(player);
  handleTurn(player);

  setTimeout(() => {
    const winner = winnerTester(table);
    console.log(winner);
    if (winner) {
      const game = document.querySelector('article');
      game.appendChild(winnerModal(winner));
    }
    endGameTester(table); // Llamamos a endGameTester después de verificar al ganador
  }, 0);
};
