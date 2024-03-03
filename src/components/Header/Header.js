import './Header.css';

export const createHeader = () => {
  const header$$ = document.createElement('header');
  const h3$$ = document.createElement('h3');
  h3$$.className = 'headerTitle';
  h3$$.textContent = 'Welcome to GamesHub!';
  header$$.appendChild(h3$$);
  return header$$;
};
