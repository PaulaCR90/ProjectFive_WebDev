export const CreateResetButton = (gameToReset) => {
  const resetButton = document.createElement('button');
  resetButton.textContent = 'New Game';
  resetButton.addEventListener('click', gameToReset);
  return resetButton;
};
