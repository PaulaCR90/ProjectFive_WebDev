import {
  CURRENT_SEQUENCE,
  setCurrentSequence
} from '../../data/CURRENT_SEQUENCE/CURRENT_SEQUENCE';
import { randomSequence } from '../RandomSequence/RandomSequence';
import { runSequence } from '../RunSequence/RunSequence';

export const NextSequenceButton = (turn) => {
  const startButton = document.createElement('button');
  startButton.classList = 'start button';
  startButton.textContent = 'Start!';
  startButton.addEventListener('click', () => {
    setCurrentSequence(randomSequence());
    turn.textContent = 'Wait till the sequence is finished!';
    // Quitar console.log después de las pruebas
    console.log(CURRENT_SEQUENCE);
    runSequence(CURRENT_SEQUENCE);
    startButton.textContent = 'Next sequence!';
  });
  return startButton;
};
