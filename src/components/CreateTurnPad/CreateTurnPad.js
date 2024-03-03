import { turnOptions } from '../../sources/sources';
import { buttonClicker } from '../ButtonClicker/ButtonClicker';

export const createTurnPad = (currentPlayer) => {
  const turnSelector = document.createElement('div');
  turnSelector.className = 'turns';
  const turnText = document.createElement('h4');
  turnText.textContent = 'Select player!';
  turnSelector.appendChild(turnText);
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'buttonContainer';
  turnOptions.forEach((option) => {
    const button = document.createElement('button');
    const playerImage =
      option === 'logo'
        ? '../../../public/assets/logo.png'
        : '../../../public/assets/crash.png';
    button.innerHTML = `<img class="symbols" src="${playerImage}" alt="${option}" />`;
    button.className = 'turnOption';
    button.value = option;
    button.addEventListener('click', () =>
      buttonClicker(option, currentPlayer)
    );
    buttonContainer.appendChild(button);
    turnSelector.appendChild(buttonContainer);
  });
  return turnSelector;
};
