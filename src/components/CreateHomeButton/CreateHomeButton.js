import { backHome } from '../HomeButton/HomeButton';

export const createHomeButton = () => {
  const homeButton = document.createElement('button');
  homeButton.textContent = 'Back home!';
  homeButton.addEventListener('click', backHome);
  return homeButton;
};
