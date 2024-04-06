export const CreateHintContainer = (randomWord) => {
  const hintContainer = document.createElement('div');
  hintContainer.className = 'hintContainer';
  for (let i = 0; i < randomWord.length; i++) {
    const letterContainer = document.createElement('div');
    letterContainer.className = 'letterContainer';
    letterContainer.id = i + 1;
    hintContainer.appendChild(letterContainer);
  }
  return hintContainer;
};
