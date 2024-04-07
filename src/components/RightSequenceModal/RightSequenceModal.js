import { winnerModal } from '../WinnerModal/WinnerModal';

export const RightSequenceModal = (sequencesEqual, sequences) => {
  sequencesEqual++;
  sequences.textContent = `${sequencesEqual}/10 sequences solved!`;
  const game = document.querySelector('article');
  game.appendChild(winnerModal(false, false, false));
  setTimeout(() => {
    const modal = document.querySelector('.modal');
    modal.remove();
  }, 1000);
};
