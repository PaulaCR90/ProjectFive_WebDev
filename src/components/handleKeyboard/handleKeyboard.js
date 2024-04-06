import { guessedLetters } from '../../sources/sources';
import { CheckWinner } from '../CheckWinner/CheckWinner';
import { winnerModal } from '../WinnerModal/WinnerModal';

export const handleKeyboard = (
  element,
  randomWord,
  key,
  tries,
  tryiesElement,
  image$$
) => {
  const letter = element;
  let positions = [];

  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === letter) {
      positions.push(i + 1);
    }
  }

  if (positions.length > 0) {
    positions.forEach((item) => {
      const positionElementId = `[id="${item}"]`;
      const div = document.querySelector(positionElementId);
      div.textContent = letter.toUpperCase();
    });

    key.className = 'correctLetter';
    key.disabled = true;

    guessedLetters.push(letter);

    let winner = CheckWinner(randomWord);
    if (winner) {
      setTimeout(() => {
        const modal = winnerModal(winner, false, false);
        const game = document.querySelector('article');
        game.appendChild(modal);
      }, 25);
    }
  } else {
    tries = tries - 1;
    const remainingTryies = tries;
    tryiesElement.textContent = `${remainingTryies} tries remaining!`;
    key.className = 'wrongLetter';
    key.disabled = true;
    image$$.src = `../../../public/assets/image${remainingTryies}.png`;
    if (tries === 0) {
      setTimeout(() => {
        const game = document.querySelector('article');
        game.appendChild(winnerModal(false, randomWord, false));
      }, 25);
    }
  }
  return tries;
};
