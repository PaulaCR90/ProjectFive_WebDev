import { turnOptions } from '../../sources/sources';
import { handleTurn } from '../handleTurn/handleTurn';

export const TurnPad = () => {
  const turnSelector = document.createElement('div');
  turnSelector.className = 'turns';
  const title$$ = document.createElement('h4');
  title$$.textContent = 'Select player!';
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'buttonContainer';

  turnOptions.forEach((element) => {
    const playerButton = document.createElement('button');
    const playerImage =
      element === 'logo'
        ? '../../../public/assets/logo.png'
        : '../../../public/assets/crash.png';
    playerButton.innerHTML = `<img class="symbols" src="${playerImage}" alt="${element}" />`;
    playerButton.className = 'turnOption';
    playerButton.value = element;
    const player = playerButton.value;
    playerButton.addEventListener('click', () => handleTurn(player));
    buttonContainer.appendChild(playerButton);
  });
  turnSelector.appendChild(title$$);
  turnSelector.appendChild(buttonContainer);
  return turnSelector;
};
