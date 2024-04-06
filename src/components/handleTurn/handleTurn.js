import {
  CURRENT_PLAYER,
  setCurrentPlayer
} from '../CURRENT_PLAYER/CURRENT_PLAYER';

export const handleTurn = (player) => {
  const turnSelector = document.querySelector('.turns');
  setCurrentPlayer(player);
  turnSelector.innerHTML = '';
  turnSelector.innerHTML = `It's <img class="symbols" src="../../../public/assets/${CURRENT_PLAYER}.png" alt="${CURRENT_PLAYER}" /> turn!`;
};
