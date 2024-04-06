import { CURRENT_PLAYER } from '../CURRENT_PLAYER/CURRENT_PLAYER';
import './WinnerModal.css';

export const winnerModal = (winner, randomWord, wrongSequence) => {
  console.log('winnerModal');
  const modal = document.createElement('div');
  modal.className = 'modal';
  if (CURRENT_PLAYER && winner) {
    const lastPlayer = CURRENT_PLAYER === 'logo' ? 'crash' : 'logo';
    modal.innerHTML = `<h3>Congratulations,</h3><img class='symbols' src='../../../public/assets/${lastPlayer}.png' /><h3> won!</h3>`;
  } else if (!CURRENT_PLAYER && winner) {
    modal.innerHTML = `<h3>Congratulations, you won!</h3>`;
  } else if (CURRENT_PLAYER && !winner) {
    modal.innerHTML = `<h3>It's a draw!</h3>`;
  } else if (!CURRENT_PLAYER && !winner && !randomWord && wrongSequence) {
    modal.innerHTML = `<h3>Sorry! Wrong sequence</h3>`;
  } else if (!CURRENT_PLAYER && !winner && !randomWord && !wrongSequence) {
    modal.innerHTML = `<h3>Nice! You found the sequence!</h3>`;
  } else {
    modal.innerHTML = `<h3>Oops! You got hanged...</h3><h4>The word was ${randomWord}</h4>`;
    modal.classList = ' modal hangmanModal';
  }

  return modal;
};
