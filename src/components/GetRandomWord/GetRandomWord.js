import { hangmanWords } from '../../sources/sources';

export const GetRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * hangmanWords.length);
  const randomWord = hangmanWords[randomIndex];
  console.log('La palabra aleatoria es:', randomWord);
  return randomWord;
};
