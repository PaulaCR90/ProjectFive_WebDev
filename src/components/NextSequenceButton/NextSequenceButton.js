import { randomSequence } from '../RandomSequence/RandomSequence';
import { runSequence } from '../RunSequence/RunSequence';

export const NextSequenceButton = (turn) => {
  const startButton = document.createElement('button');
  startButton.classList = 'start button';
  startButton.textContent = 'Start!';
  startButton.addEventListener('click', () => {
    const currentSequence = randomSequence();
    turn.textContent = 'Wait till the sequence is finished!';
    // Quitar console.log después de las pruebas
    console.log(currentSequence);
    runSequence(currentSequence);
    startButton.textContent = 'Next sequence!';
  });
  return startButton;
};
