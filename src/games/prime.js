import { getRandomInteger } from '../utils.js';
import runGame from '../index.js';
import isThisPrime from '../isThisPrime.js';

const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQA = () => {
  const question = getRandomInteger(0, 9);
  let correct;
  if (isThisPrime(question)) {
    correct = 'yes';
  } else {
    correct = 'no';
  }
  return [question, correct];
};

export default () => runGame(desc, getQA);
