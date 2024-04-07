import { sequences } from '../../sources/sources';

export const randomSequence = () => {
  const randomIndex = Math.floor(Math.random() * 10);
  const currentSequence = sequences[randomIndex];
  return currentSequence;
};
