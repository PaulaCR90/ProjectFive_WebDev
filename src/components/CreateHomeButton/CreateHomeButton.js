import { backHome } from '../HomeButton/HomeButton';

export const CreateHomeButton = () => {
  const homeButton = document.createElement('button');
  homeButton.textContent = 'Back home!';
  homeButton.addEventListener('click', backHome);
  return homeButton;
};
