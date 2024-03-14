import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const getGCD = (a, b) => {
  if (a === b) return b;
  if (a < b) return getGCD(b, a);
  if (b === 0) return a;
  return getGCD(b, a % b);
};

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = String(getGCD(number1, number2));

  return [question, answer];
};

export default () => runGame(description, generateRound);
