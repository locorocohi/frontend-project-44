import { getRndInt } from '../utils.js';
import runGame from '../index.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const desc = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQA = () => {
  const numbers = getRndInt(0, 99);
  const question = `${numbers}`;
  const correctAnswer = isEven(numbers);

  return [question, correctAnswer];
};

export default () => runGame(desc, getQA);
