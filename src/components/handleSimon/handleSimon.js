import { CURRENT_SEQUENCE } from '../../data/CURRENT_SEQUENCE/CURRENT_SEQUENCE';
import { RightSequenceModal } from '../RightSequenceModal/RightSequenceModal';
import { winnerModal } from '../WinnerModal/WinnerModal';
import { WrongSequenceModal } from '../WrongSequenceModal/WrongSequenceModal';

let sequencesEqual = 0;
export const handleClick = (e, sequences, selectedColors) => {
  const colorImage = e;
  console.log(colorImage);
  setTimeout(() => {
    colorImage.style.width = '90%';
  }, 0);

  const colorValue = e.target.getAttribute('data-value');
  selectedColors.push(colorValue);
  console.log(selectedColors);
  if (
    selectedColors.length === 6 &&
    selectedColors.every((value, i) => value === CURRENT_SEQUENCE[i])
  ) {
    console.log('¡Secuencia correcta!');
    selectedColors.length = 0;
    if (sequencesEqual === 9) {
      const start = document.querySelector('.start');
      start.remove();
      sequencesEqual++;
      sequences.textContent = `${sequencesEqual}/10 sequences solved!`;
      const game = document.querySelector('article');
      game.appendChild(winnerModal(true, false, false));
    } else if (sequencesEqual < 9) {
      sequencesEqual++;
      sequences.textContent = `${sequencesEqual}/10 sequences solved!`;
      RightSequenceModal(sequencesEqual, sequences);
    }
  } else if (selectedColors.length === 6) {
    WrongSequenceModal(CURRENT_SEQUENCE);
    selectedColors.length = 0;
  }
};
