// Home's sources
export const homeCards = [
  {
    name: 'Tictactoe',
    description: 'Get three of the same symbol in a row!',
    image: './assets/tictactoe.png'
  },
  {
    name: 'Hangman',
    description: 'Guess the hidden word before the whole man is hanged',
    image: './assets/image0.png'
  },
  {
    name: 'Simon says',
    description: 'Repeat the color sequence after the computer',
    image: './assets/simon-says-1.png'
  }
];

// Tictactoe's sources
export const turnOptions = ['logo', 'crash'];

export const winnerOptions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export const table = {
  0: null,
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null
};

// Hangman's sources
export const hangmanWords = [
  'discipline',
  'noodles',
  'band',
  'quiet',
  'crocodile',
  'furious',
  'hole',
  'tractor',
  'wood',
  'thermostat',
  'climate',
  'patience',
  'chicken',
  'computer',
  'handyman',
  'freak',
  'curious',
  'sword',
  'knight',
  'godess'
];

export let guessedLetters = [];

export const Keyboard = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

// Simon's sources
export const colors = [
  {
    name: 'azul',
    image: './assets/azul.png'
  },
  {
    name: 'verde',
    image: './assets/verde.png'
  },
  {
    name: 'rojo',
    image: './assets/rojo.png'
  },
  {
    name: 'amarillo',
    image: './assets/amarillo.png'
  }
];

export const sequences = [
  ['verde', 'azul', 'rojo', 'verde', 'amarillo', 'azul'],
  ['azul', 'rojo', 'verde', 'azul', 'verde', 'rojo'],
  ['rojo', 'azul', 'verde', 'amarillo', 'azul', 'verde'],
  ['amarillo', 'rojo', 'verde', 'azul', 'verde', 'rojo'],
  ['verde', 'rojo', 'amarillo', 'azul', 'rojo', 'verde'],
  ['azul', 'verde', 'rojo', 'verde', 'rojo', 'amarillo'],
  ['rojo', 'verde', 'azul', 'rojo', 'verde', 'amarillo'],
  ['amarillo', 'verde', 'rojo', 'verde', 'azul', 'azul'],
  ['verde', 'azul', 'rojo', 'azul', 'verde', 'amarillo'],
  ['azul', 'verde', 'rojo', 'verde', 'amarillo', 'verde'],
  ['rojo', 'verde', 'azul', 'amarillo', 'verde', 'azul'],
  ['amarillo', 'azul', 'verde', 'rojo', 'azul', 'verde'],
  ['verde', 'rojo', 'azul', 'azul', 'verde', 'rojo'],
  ['azul', 'verde', 'rojo', 'verde', 'amarillo', 'azul'],
  ['rojo', 'azul', 'verde', 'amarillo', 'verde', 'azul'],
  ['amarillo', 'rojo', 'verde', 'azul', 'rojo', 'verde'],
  ['verde', 'azul', 'rojo', 'azul', 'verde', 'amarillo'],
  ['azul', 'verde', 'rojo', 'azul', 'verde', 'rojo'],
  ['rojo', 'verde', 'amarillo', 'verde', 'azul', 'azul'],
  ['amarillo', 'azul', 'rojo', 'verde', 'rojo', 'verde'],
  ['verde', 'rojo', 'azul', 'amarillo', 'verde', 'azul'],
  ['azul', 'verde', 'rojo', 'azul', 'rojo', 'amarillo'],
  ['rojo', 'verde', 'azul', 'verde', 'amarillo', 'azul'],
  ['amarillo', 'azul', 'verde', 'rojo', 'verde', 'rojo'],
  ['verde', 'rojo', 'amarillo', 'azul', 'azul', 'verde'],
  ['azul', 'verde', 'rojo', 'amarillo', 'verde', 'amarillo'],
  ['rojo', 'azul', 'verde', 'amarillo', 'azul', 'verde'],
  ['amarillo', 'rojo', 'verde', 'azul', 'verde', 'rojo'],
  ['verde', 'azul', 'rojo', 'verde', 'azul', 'amarillo'],
  ['azul', 'verde', 'rojo', 'azul', 'verde', 'amarillo']
];

// Footer's sources
export const FooterInfo = [
  {
    mediaHref: 'mailto:p.a.castrorodriguez@gmail.com',
    mediaSrc: './assets/mailpeq.png'
  },
  {
    mediaHref:
      'https://www.linkedin.com/in/paula-alejandra-castro-rodr%C3%ADguez-a671b3208/',
    mediaSrc: './assets/linkkedinpeq.png'
  },
  {
    mediaHref: 'https://github.com/PaulaCR90/',
    mediaSrc: './assets/github.png'
  }
];
