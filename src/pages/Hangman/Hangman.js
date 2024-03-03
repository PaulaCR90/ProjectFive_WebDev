import { backHome } from '../../components/HomeButton/HomeButton';
import { winnerModal } from '../../components/WinnerModal/WinnerModal';
import { Keyboard, hangmanWords, homeCards } from '../../sources/sources';
import './Hangman.css';

//! Salta el modal winner al reiniciar partida de forma aleatoria. ??????????????????????????????????
let guessedLetters = [];

export const createHangman = () => {
  let tries = 6;
  const article = document.querySelector('.articleContainer');
  const game = Hangman(tries);
  article.innerHTML = '';
  article.appendChild(game);
};

export const handleClick = (
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

    let winner = checkWinner(randomWord);
    if (winner) {
      setTimeout(() => {
        const modal = winnerModal(false, true, false);
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
        game.appendChild(winnerModal(false, false, randomWord));
      }, 25);
    }
  }
  return tries;
};

const checkWinner = (randomWord) => {
  for (let i = 0; i < randomWord.length; i++) {
    if (!guessedLetters.includes(randomWord[i])) {
      return false;
    }
  }
  return true;
};

export const Hangman = (tries) => {
  const Hangman = document.createElement('section');
  const title$$ = document.createElement('h2');
  title$$.textContent = homeCards[1].name;
  const image$$ = document.createElement('img');
  image$$.className = 'hangmanIcon';
  image$$.src = '../../../public/assets/image6.png';

  const tryiesElement = document.createElement('h3');
  tryiesElement.textContent = `${tries} tries remaining!`;

  const randomIndex = Math.floor(Math.random() * hangmanWords.length);
  const randomWord = hangmanWords[randomIndex];
  //! quitar console.log después de las pruebas!!!!
  console.log('La palabra aleatoria es:', randomWord);

  const hintContainer = document.createElement('div');
  hintContainer.className = 'hintContainer';
  for (let i = 0; i < randomWord.length; i++) {
    const letterContainer = document.createElement('div');
    letterContainer.className = 'letterContainer';
    letterContainer.id = i + 1;
    hintContainer.appendChild(letterContainer);
  }

  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  Keyboard.forEach((line) => {
    const keyboardLine = document.createElement('div');
    keyboardLine.className = 'keyboardLine';
    line.forEach((element) => {
      const key = document.createElement('button');
      key.className = 'keyButton';
      key.textContent = element;
      key.value = element;
      key.addEventListener(
        'click',
        () =>
          (tries = handleClick(
            element,
            randomWord,
            key,
            tries,
            tryiesElement,
            image$$
          ))
      );
      keyboardLine.appendChild(key);
    });
    keyboard.appendChild(keyboardLine);
  });

  const resetButton = document.createElement('button');
  resetButton.textContent = 'New Game';
  resetButton.addEventListener('click', createHangman);
  const homeButton = document.createElement('button');
  homeButton.textContent = 'Back home!';
  homeButton.addEventListener('click', backHome);
  Hangman.appendChild(title$$);
  Hangman.appendChild(image$$);
  Hangman.appendChild(hintContainer);
  Hangman.appendChild(keyboard);
  Hangman.appendChild(tryiesElement);
  Hangman.appendChild(resetButton);
  Hangman.appendChild(homeButton);

  return Hangman;
};

//Cuando los intentos lleguen a 0 => OpenModal(Has perdido, la palabra era: 'palabra'; botón de reiniciar partida, botón de volver a la home)
//Cuando la palabra se acierte => OpenModal(winner) + reiniciar juego + volver a la home
