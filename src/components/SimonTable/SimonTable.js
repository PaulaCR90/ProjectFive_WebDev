import { colors } from '../../sources/sources';
import { handleClick } from '../handleSimon/handleSimon';

export const SimonTable = (sequences, selectedColors, currentSequence) => {
  const table = document.createElement('div');
  table.classList = 'simonTable';
  colors.forEach((color) => {
    const colorButton = document.createElement('img');
    colorButton.classList = `colorButton ${color.name}`;
    colorButton.src = color.image;
    colorButton.setAttribute('data-value', `${color.name}`);
    colorButton.addEventListener('click', (e) => {
      handleClick(e, sequences, selectedColors, currentSequence);
    });
    table.appendChild(colorButton);
  });
  return table;
};
