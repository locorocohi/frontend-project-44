import { getRndInt, isThisPrime } from '../utils.js';
import runGame from '../index.js';

const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQA = () => {
  const firstArgument = getRndInt(1, 10);
  const question = `${firstArgument}`;
  const correctAnswer = String(isThisPrime(firstArgument));

  return [question, correctAnswer];
};

export default () => runGame(desc, getQA);
