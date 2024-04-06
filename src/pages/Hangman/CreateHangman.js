import { Hangman } from '../../components/Hangman/Hangman';
import { guessedLetters } from '../../sources/sources';

export const createHangman = () => {
  guessedLetters.splice(0, guessedLetters.length);
  console.log(guessedLetters);
  let tries = 6;
  const article = document.querySelector('.articleContainer');
  const game = Hangman(tries);
  article.innerHTML = '';
  article.appendChild(game);
};
