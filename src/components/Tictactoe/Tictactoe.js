import { winnerModal } from '../WinnerModal/WinnerModal';
import { winnerTester } from '../WinnerTester/WinnerTester';
import { homeCards } from '../../sources/sources';
import { createTictactoe } from '../../pages/Tictactoe/CreateTictactoe';
import { createTurnPad } from '../CreateTurnPad/CreateTurnPad';
import { createTable } from '../CreateTable/CreateTable';
import { createHomeButton } from '../CreateHomeButton/CreateHomeButton';
import { endGameTester } from '../EndGameTester/EndGameTester';

let currentPlayer = '';

export const printAndChange = (e, tableToCheck) => {
  const playerImage =
    currentPlayer === 'logo'
      ? '../../../public/assets/logo.png'
      : '../../../public/assets/crash.png';
  if (e.children.length === 0) {
    e.innerHTML = `<img class="symbols" src="${playerImage}" alt="${currentPlayer}" />`;
    tableToCheck[e.dataset.index] = currentPlayer;
    currentPlayer = currentPlayer === 'logo' ? 'crash' : 'logo';
    const turnSelector = document.querySelector('.turns');
    turnSelector.innerHTML = '';
    const screen = document.createElement('div');
    screen.className = 'turnScreen';
    const newPlayerImage =
      currentPlayer === 'logo'
        ? '../../../public/assets/logo.png'
        : '../../../public/assets/crash.png';
    screen.innerHTML = `<h3>It's</h3><img class="symbols" src="${newPlayerImage}" alt="${currentPlayer}" /><h3>'s turn!</h3>`;
    turnSelector.appendChild(screen);

    setTimeout(() => {
      const winner = winnerTester(tableToCheck);
      if (winner) {
        const game = document.querySelector('article');
        game.appendChild(winnerModal(winner, currentPlayer));
      }
      endGameTester(tableToCheck, currentPlayer);
    }, 0);
  }
};

export const Tictactoe = () => {
  let currentPlayer = 'logo';
  const gamePage = document.createElement('section');
  const title$$ = document.createElement('h2');
  title$$.textContent = homeCards[0].name;
  const tableToCheck = Array(9).fill(null);
  const resetButton = document.createElement('button');
  resetButton.textContent = 'New Game';
  resetButton.addEventListener('click', createTictactoe);
  gamePage.appendChild(title$$);
  gamePage.appendChild(createTurnPad(currentPlayer));
  gamePage.appendChild(createTable(tableToCheck, currentPlayer));
  gamePage.appendChild(resetButton);
  gamePage.appendChild(createHomeButton());
  return gamePage;
};
