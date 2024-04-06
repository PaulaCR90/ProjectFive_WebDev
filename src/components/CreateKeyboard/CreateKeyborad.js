import { Keyboard } from '../../sources/sources';
import { handleKeyboard } from '../handleKeyboard/handleKeyboard';

export const CreateKeyboard = (randomWord, tries, tryiesElement, image$$) => {
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
          (tries = handleKeyboard(
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
  return keyboard;
};
