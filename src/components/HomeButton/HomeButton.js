import { createHome } from '../../pages/Home/Home';
import { createEvents } from '../Events/Events';

export const backHome = () => {
  const article = document.querySelector('.articleContainer');
  const home = createHome();
  article.innerHTML = '';
  article.appendChild(home);
  createEvents();
};
