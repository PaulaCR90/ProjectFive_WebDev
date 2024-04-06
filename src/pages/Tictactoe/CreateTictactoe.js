import { resetTable } from '../../components/ResetTable/ResetTable';
import { Tictactoe } from '../../components/Tictactoe/Tictactoe';
import './CreateTictactoe.css';

export const createTictactoe = () => {
  const article = document.querySelector('.articleContainer');
  const game = Tictactoe();
  resetTable(game.table);
  article.innerHTML = '';
  article.appendChild(game);
};
