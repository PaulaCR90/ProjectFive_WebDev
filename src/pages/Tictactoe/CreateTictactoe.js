import { createHomeButton } from '../../components/CreateHomeButton/CreateHomeButton';
import { winnerModal } from '../../components/WinnerModal/WinnerModal';
import { homeCards, turnOptions, winnerOptions } from '../../sources/sources';
import './CreateTictactoe.css';
//! Algunos errores al detectar algunas combinaciones ganadoras
//! No dejar jugar hasta que seleccione un jugador
let currentPlayer = '';
export const createTictactoe = () => {
  const article = document.querySelector('.articleContainer');
  const game = Tictactoe();
  article.innerHTML = '';
  article.appendChild(game);
};

export const endGameTester = (tableToCheck) => {
  const isTableFull = Object.values(tableToCheck).every(
    (square) => square !== null
  );
  if (isTableFull) {
    const winner = winnerTester(tableToCheck);
    if (!winner) {
      setTimeout(() => {
        const game = document.querySelector('article');
        game.appendChild(winnerModal(currentPlayer));
      }, 25);
    }
  }
};

export const winnerTester = (tableToCheck) => {
  for (const combo of winnerOptions) {
    const [a, b, c] = combo;
    if (
      tableToCheck[a] &&
      tableToCheck[a] === tableToCheck[b] &&
      tableToCheck[a] === tableToCheck[c]
    ) {
      return tableToCheck[a];
    }
  }
  return null;
};

export const buttonClicker = (e) => {
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
      endGameTester(tableToCheck);
    }, 0);
  }
};

export const createTable = (tableToCheck) => {
  const table = document.createElement('div');
  table.className = 'table';
  for (let i = 0; i < 9; i++) {
    const square = document.createElement('div');
    square.className = 'cell';
    square.dataset.index = i;
    square.addEventListener('click', () =>
      printAndChange(square, tableToCheck)
    );
    table.appendChild(square);
  }
  return table;
};

export const createTurnPad = () => {
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
    button.addEventListener('click', () => buttonClicker(option));
    buttonContainer.appendChild(button);
    turnSelector.appendChild(buttonContainer);
  });
  return turnSelector;
};

export const Tictactoe = () => {
  const gamePage = document.createElement('section');
  const title$$ = document.createElement('h2');
  title$$.textContent = homeCards[0].name;
  const tableToCheck = Array(9).fill(null);
  const resetButton = document.createElement('button');
  resetButton.textContent = 'New Game';
  resetButton.addEventListener('click', createTictactoe);
  gamePage.appendChild(title$$);
  gamePage.appendChild(createTurnPad(currentPlayer));
  gamePage.appendChild(createTable(tableToCheck));
  gamePage.appendChild(resetButton);
  gamePage.appendChild(createHomeButton());
  return gamePage;
};
//? Bloquear que se pueda continuar jugando cuando ya hay un winner
