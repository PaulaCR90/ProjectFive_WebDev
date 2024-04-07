export const CreateResetButton = (gameToReset) => {
  const resetButton = document.createElement('button');
  resetButton.textContent = 'New Game';
  resetButton.className = 'button';
  resetButton.addEventListener('click', gameToReset);
  return resetButton;
};
