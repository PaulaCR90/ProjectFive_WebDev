import { Tictactoe } from '../../components/Tictactoe/Tictactoe';
import './CreateTictactoe.css';

//? La primera vez que se juega después de actualizar la página no funciona nada.
//? No puedo separar Tictactoe de PrintAndChange por el currentPlayer.

export const createTictactoe = () => {
  const article = document.querySelector('.articleContainer');
  const game = Tictactoe();
  article.innerHTML = '';
  article.appendChild(game);
};
//Cambios
//! No dejar jugar hasta que seleccione un jugador.
