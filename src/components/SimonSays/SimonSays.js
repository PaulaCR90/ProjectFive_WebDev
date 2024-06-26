import { homeCards } from '../../sources/sources';
import './SimonSays.css';
import { SimonTable } from '../SimonTable/SimonTable';
import { createSimonSays } from '../../pages/SimonSays/CreateSimonSays';
import { CreateHomeButton } from '../CreateHomeButton/CreateHomeButton';
import { CreateResetButton } from '../CreateResetButton/CreateResetButton';
import { NextSequenceButton } from '../NextSequenceButton/NextSequenceButton';
import './SimonSays.css';

export const SimonSays = () => {
  let selectedColors = [];
  const Simon = document.createElement('section');
  Simon.className = 'simonContainer';
  const title$$ = document.createElement('h2');
  title$$.textContent = homeCards[2].name;
  const turn = document.createElement('h3');
  turn.className = 'turn';
  turn.textContent = 'Wait till the sequence is finished!';
  const sequences = document.createElement('h3');
  sequences.textContent = '0/10 sequences solved!';
  Simon.appendChild(title$$);
  Simon.appendChild(NextSequenceButton(turn));
  Simon.appendChild(turn);
  Simon.appendChild(SimonTable(sequences, selectedColors));
  Simon.appendChild(sequences);
  Simon.appendChild(CreateResetButton(createSimonSays));
  Simon.appendChild(CreateHomeButton());
  return Simon;
};
