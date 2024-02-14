import { getRndInt, isThisPrime } from '../utils.js';
import runGame from '../index.js';

const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQA = () => {
  const question = getRndInt(100);
  let correct;
  if (isThisPrime(question)) {
    correct = 'yes';
  } else {
    correct = 'no';
  }
  return [question, correct];
};

export default () => runGame(desc, getQA);
