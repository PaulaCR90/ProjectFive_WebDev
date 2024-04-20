import { table } from '../../sources/sources';
import { setCurrentPlayer } from '../../data/CURRENT_PLAYER/CURRENT_PLAYER';

export const resetTable = () => {
  setCurrentPlayer('');
  for (let i = 0; i < 9; i++) {
    table[i] = null;
  }
};
