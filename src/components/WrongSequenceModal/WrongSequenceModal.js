import { runSequence } from '../RunSequence/RunSequence';
import { winnerModal } from '../WinnerModal/WinnerModal';

export const WrongSequenceModal = (currentSequence) => {
  const wrongSequence = true;
  const game = document.querySelector('article');
  game.appendChild(winnerModal(false, false, wrongSequence));
  setTimeout(() => {
    const modal = document.querySelector('.modal');
    modal.remove();
    runSequence(currentSequence);
  }, 2000);
};
