import { SimonSays } from '../../components/SimonSays/SimonSays';

export const createSimonSays = () => {
  const article = document.querySelector('.articleContainer');
  const game = SimonSays();
  article.innerHTML = '';
  article.appendChild(game);
};
