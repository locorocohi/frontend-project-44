import { getRndInt, nod } from '../utils.js'
import runGame from '../index.js'

const desc = 'Find the greatest common divisor of given numbers.';

const getQA = () => {
  const firstArgument = getRndInt(1, 100);
  let secondArgument = getRndInt(1, 100);
  if (secondArgument === firstArgument) {
    secondArgument = getRndInt(1, 100)
  }
  const question = `${firstArgument} ${secondArgument}`;
  const correctAnswer = String(nod(firstArgument, secondArgument));

  return [question, correctAnswer];
};

export default () => runGame(desc, getQA);

