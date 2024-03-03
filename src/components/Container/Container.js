import { createHome } from '../../pages/Home/Home';

export const createContainer = () => {
  const article$$ = document.createElement('article');
  article$$.className = 'articleContainer';
  const Home = createHome();
  article$$.appendChild(Home);
  return article$$;
};
