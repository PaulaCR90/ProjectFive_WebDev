import { homeCards } from '../../sources/sources';
import './Hangman.css';
import { createHangman } from '../../pages/Hangman/CreateHangman';
import { CreateKeyboard } from '../CreateKeyboard/CreateKeyborad';
import { GetRandomWord } from '../GetRandomWord/GetRandomWord';
import { CreateHintContainer } from '../CreateHintContainer/CreateHintContainer';
import { CreateResetButton } from '../CreateResetButton/CreateResetButton';
import { CreateHomeButton } from '../CreateHomeButton/CreateHomeButton';

export const Hangman = (tries) => {
  const randomWord = GetRandomWord();
  const Hangman = document.createElement('section');
  const title$$ = document.createElement('h2');
  title$$.textContent = homeCards[1].name;
  const image$$ = document.createElement('img');
  image$$.className = 'hangmanIcon';
  image$$.src = '../../../public/assets/image6.png';
  const tryiesElement = document.createElement('h3');
  tryiesElement.textContent = `${tries} tries remaining!`;
  Hangman.appendChild(title$$);
  Hangman.appendChild(image$$);
  Hangman.appendChild(CreateHintContainer(randomWord));
  Hangman.appendChild(
    CreateKeyboard(randomWord, tries, tryiesElement, image$$)
  );
  Hangman.appendChild(tryiesElement);
  Hangman.appendChild(CreateResetButton(createHangman));
  Hangman.appendChild(CreateHomeButton());

  return Hangman;
};
