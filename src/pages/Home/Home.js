import { homeCards } from '../../sources/sources';
import './Home.css';

export const createHome = () => {
  const gameCards$$ = document.createElement('section');
  gameCards$$.className = 'homeSection';
  homeCards.forEach((element) => {
    const gameCard$$ = document.createElement('div');
    gameCard$$.classList = `card ${element.name}`;
    const infoContainer$$ = document.createElement('div');
    infoContainer$$.className = 'infoContainer';
    const title$$ = document.createElement('h3');
    title$$.textContent = element.name;
    title$$.className = 'gameTitles';
    const image$$ = document.createElement('img');
    image$$.className = 'gameImage';
    image$$.src = element.image;
    const description$$ = document.createElement('p');
    description$$.textContent = element.description;
    infoContainer$$.appendChild(image$$);
    infoContainer$$.appendChild(description$$);
    gameCard$$.appendChild(title$$);
    gameCard$$.appendChild(infoContainer$$);
    gameCards$$.appendChild(gameCard$$);
  });
  return gameCards$$;
};
