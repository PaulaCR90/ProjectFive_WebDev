import { homeCards } from '../../sources/sources';
import { createTictactoe } from '../../pages/Tictactoe/CreateTictactoe';
import { TurnPad } from '../TurnPad/TurnPad';
import { Table } from '../Table/Table';
import { CreateHomeButton } from '../CreateHomeButton/CreateHomeButton';
import { CreateResetButton } from '../CreateResetButton/CreateResetButton';

export const Tictactoe = () => {
  const gamePage = document.createElement('section');
  const title$$ = document.createElement('h2');
  title$$.textContent = homeCards[0].name;
  gamePage.appendChild(title$$);
  gamePage.appendChild(TurnPad());
  gamePage.appendChild(Table());
  gamePage.appendChild(CreateResetButton(createTictactoe));
  gamePage.appendChild(CreateHomeButton());
  return gamePage;
};
