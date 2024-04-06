import { guessedLetters } from '../../sources/sources';

export const CheckWinner = (randomWord) => {
  for (let i = 0; i < randomWord.length; i++) {
    if (!guessedLetters.includes(randomWord[i])) {
      return false;
    }
  }
  return true;
};
