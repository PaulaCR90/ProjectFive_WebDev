export const GetLetterPostions = (randomWord, positions, letter) => {
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === letter) {
      positions.push(i + 1);
    }
  }
};
