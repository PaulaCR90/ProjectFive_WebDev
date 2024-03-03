import { printAndChange } from '../Tictactoe/Tictactoe';

export const buttonClicker = (e, currentPlayer) => {
  currentPlayer = e;
  const turnSelector = document.querySelector('.turns');
  turnSelector.innerHTML = '';
  const screen = document.createElement('div');
  const tableToCheck = Array(9).fill(null);
  const playerImage =
    currentPlayer === 'logo'
      ? '../../../public/assets/logo.png'
      : '../../../public/assets/crash.png';
  screen.innerHTML = `<h3>It's</h3><img class="symbols" src="${playerImage}" alt="${currentPlayer}" /><h3>'s turn!</h3>`;
  turnSelector.appendChild(screen);

  const squares = document.querySelectorAll('.cell');
  squares.forEach((square) => {
    square.addEventListener('click', (e) =>
      printAndChange(e.target, tableToCheck, currentPlayer)
    );
  });
};
