import {
  CURRENT_PLAYER,
  setCurrentPlayer
} from '../../data/CURRENT_PLAYER/CURRENT_PLAYER';

export const handleTurn = (player) => {
  const turnSelector = document.querySelector('.turns');
  setCurrentPlayer(player);
  turnSelector.innerHTML = '';
  turnSelector.innerHTML = `<h4>It's <img class="symbols" src="./assets/${CURRENT_PLAYER}.png" alt="${CURRENT_PLAYER}" /> turn!</h4>`;
};
