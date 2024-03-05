import { getRandomInteger } from '../utils.js';
import runGame from '../index.js';

const desc = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQA = () => {
  const numbers = getRandomInteger(0, 99);
  const question = numbers.toString();
  const correctAnswer = numbers % 2 === 0 ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => runGame(desc, getQA);
