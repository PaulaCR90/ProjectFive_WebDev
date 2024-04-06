import { createHangman } from '../../pages/Hangman/CreateHangman';
import { createSimonSays } from '../../pages/SimonSays/SimonSays';
import { createTictactoe } from '../../pages/Tictactoe/CreateTictactoe';

export const createEvents = () => {
  const cardTictactoe = document.querySelector('.Tictactoe');
  cardTictactoe.addEventListener('click', createTictactoe);
  const cardHangman = document.querySelector('.Hangman');
  cardHangman.addEventListener('click', createHangman);
  const cardSudoku = document.querySelector('.Simon');
  cardSudoku.addEventListener('click', createSimonSays);
};
