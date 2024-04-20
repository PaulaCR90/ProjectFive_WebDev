import { setCurrentPlayer } from '../../data/CURRENT_PLAYER/CURRENT_PLAYER';
import { guessedLetters } from '../../sources/sources';
import { CheckWinner } from '../CheckWinner/CheckWinner';
import { GetLetterPostions } from '../GetLetterPositions/GetLetterPositions';
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
  GetLetterPostions(randomWord, positions, letter);
  const game = document.querySelector('article');
  if (positions.length > 0) {
    positions.forEach((item) => {
      const positionElementId = `[id="${item}"]`;
      const div = document.querySelector(positionElementId);
      div.textContent = letter.toUpperCase();
    });
    key.className = 'correctLetter';
    key.disabled = true;
    guessedLetters.push(letter);
    if (CheckWinner(randomWord)) {
      setCurrentPlayer('');
      setTimeout(() => {
        game.appendChild(winnerModal(true, false, false));
      }, 25);
    }
  } else {
    tries = tries - 1;
    tryiesElement.textContent = `${tries} tries remaining!`;
    key.className = 'wrongLetter';
    key.disabled = true;
    image$$.src = `./assets/image${tries}.png`;
    if (tries === 0) {
      setTimeout(() => {
        game.appendChild(winnerModal(false, randomWord, false));
      }, 25);
    }
  }
  return tries;
};
