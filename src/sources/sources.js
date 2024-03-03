export const homeCards = [
  {
    name: 'Tictactoe',
    description: 'Get three of the same symbol in a row!',
    image: '../../public/assets/tictactoe.png'
  },
  {
    name: 'Hangman',
    description: 'Guess the hidden word before the whole man is hanged',
    image: '../../public/assets/hangman.jpg'
  },
  {
    name: 'Simon says',
    description: 'Repeat the color sequence after de computer',
    image: '../../public/assets/simon.png'
  }
];

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

export const hangmanWords = [
  'disciplina',
  'macarrones',
  'banda',
  'quieto',
  'cocodrilo',
  'furioso',
  'hoyo',
  'tractor',
  'madera',
  'termostato'
];

export const Keyboard = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

export const colors = [
  {
    name: 'azul',
    image: '../../public/assets/azul.png'
  },
  {
    name: 'verde',
    image: '../../public/assets/verde.png'
  },
  {
    name: 'rojo',
    image: '../../public/assets/rojo.png'
  },
  {
    name: 'amarillo',
    image: '../../public/assets/amarillo.png'
  }
];

export const sequences = [
  ['azul', 'verde', 'rojo', 'amarillo', 'verde', 'azul'],
  ['verde', 'rojo', 'azul', 'amarillo', 'azul', 'verde'],
  ['rojo', 'azul', 'verde', 'amarillo', 'verde', 'rojo'],
  ['amarillo', 'verde', 'rojo', 'azul', 'verde', 'azul'],
  ['rojo', 'verde', 'amarillo', 'azul', 'verde', 'azul'],
  ['verde', 'azul', 'amarillo', 'rojo', 'azul', 'verde'],
  ['azul', 'rojo', 'verde', 'amarillo', 'verde', 'azul'],
  ['amarillo', 'rojo', 'verde', 'azul', 'verde', 'azul'],
  ['verde', 'azul', 'rojo', 'amarillo', 'azul', 'verde'],
  ['rojo', 'verde', 'azul', 'amarillo', 'azul', 'verde']
];

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
