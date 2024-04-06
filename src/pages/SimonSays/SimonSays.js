import { backHome } from '../../components/HomeButton/HomeButton';
import { winnerModal } from '../../components/WinnerModal/WinnerModal';
import { colors, homeCards, sequences } from '../../sources/sources';
import './SimonSays.css';

export const createSimonSays = () => {
  const article = document.querySelector('.articleContainer');
  const game = SimonSays();
  article.innerHTML = '';
  article.appendChild(game);
};

export const SimonSays = () => {
  let selectedColors = [];
  let currentSequence = [];
  const Simon = document.createElement('section');
  Simon.className = 'simonContainer';
  const title$$ = document.createElement('h2');
  title$$.textContent = homeCards[2].name;
  const turn = document.createElement('h3');
  turn.className = 'turn';
  turn.textContent = 'Wait till the sequence is finished!';
  const startButton = document.createElement('button');
  startButton.className = 'start';
  startButton.textContent = 'Start!';
  startButton.addEventListener('click', () => {
    selectedColors = [];
    currentSequence = randomSequence();
    runSequence(currentSequence);
    startButton.textContent = 'Next sequence!';
    turn.textContent = 'Wait till the sequence is finished!';
  });
  const sequences = document.createElement('h3');
  sequences.textContent = '0/10 sequences solved!';
  //crear tablero con cuatro colores
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

  // crear botón reinicio y botón backhome
  const resetButton = document.createElement('button');
  resetButton.textContent = 'New Game';
  resetButton.addEventListener('click', createSimonSays);
  const homeButton = document.createElement('button');
  homeButton.textContent = 'Back home!';
  homeButton.addEventListener('click', backHome);

  Simon.appendChild(title$$);
  Simon.appendChild(startButton);
  Simon.appendChild(turn);
  Simon.appendChild(table);
  Simon.appendChild(sequences);
  Simon.appendChild(resetButton);
  Simon.appendChild(homeButton);
  return Simon;
};

export const randomSequence = () => {
  const randomIndex = Math.floor(Math.random() * 10);
  const currentSequence = sequences[randomIndex];
  console.log(currentSequence);
  return currentSequence;
};

export const runSequence = (currentSequence, index = 0) => {
  const images = document.querySelectorAll('.colorButton');
  if (index < 6) {
    const color = currentSequence[index];
    const colorImage = Array.from(images).find(
      (img) => img.dataset.value === color
    );
    colorImage.style.width = '90%';
    setTimeout(() => {
      colorImage.style.width = '100%';
      runSequence(currentSequence, index + 1);
    }, 1000);
  } else {
    // Cambiar el texto del h3 a "¡Te toca!"
    const h3 = document.querySelector('.turn');
    h3.textContent = '¡Te toca!';
  }
};

let sequencesEqual = 0;
export const handleClick = (e, sequences, selectedColors, currentSequence) => {
  const colorValue = e.target.getAttribute('data-value');
  selectedColors.push(colorValue);
  console.log(selectedColors);
  if (
    selectedColors.length === 6 &&
    selectedColors.every((value, i) => value === currentSequence[i])
  ) {
    console.log('¡Secuencia correcta!');
    if (sequencesEqual === 10) {
      const start = document.querySelector('.start');
      start.remove();
      sequencesEqual++;
      sequences.textContent = `${sequencesEqual}/10 sequences solved!`;
      const game = document.querySelector('article');
      game.appendChild(winnerModal(false, false, true));
    } else if (sequencesEqual < 9) {
      sequencesEqual++;
      sequences.textContent = `${sequencesEqual}/10 sequences solved!`;
      const game = document.querySelector('article');
      game.appendChild(winnerModal(false, false, false));
      setTimeout(() => {
        const modal = document.querySelector('.modal');
        modal.remove();
      }, 1000);
    }
  } else if (selectedColors.length === 6) {
    const wrongSequence = true;
    console.log('¡Secuencia incorrecta!');
    selectedColors.length = 0;
    console.log(selectedColors);
    const game = document.querySelector('article');
    game.appendChild(winnerModal(false, false, false, wrongSequence));
    setTimeout(() => {
      const modal = document.querySelector('.modal');
      modal.remove();
      runSequence(currentSequence);
    }, 2000);
  }
};

//Cambios que hacer
//* Separar en componentes pequeños.
//? Añadir opciones de secuencias crecientes (1 color, 2 colores, 3 colores...) para aumentar la dificultad.
//? Crear un simbolo de información que, al hacer hover, muestre un modal que explique el juego, y al quitar el hover se quite el modal. PARA TODOS LOS JUEGOS
