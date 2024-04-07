import { backHome } from '../HomeButton/HomeButton';
import './CreateHomeButton.css';

export const CreateHomeButton = () => {
  const homeButton = document.createElement('button');
  homeButton.textContent = 'Back home!';
  homeButton.className = 'button';
  homeButton.addEventListener('click', backHome);
  return homeButton;
};
