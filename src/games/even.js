import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(0, 99);
  const question = number.toString();
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => runGame(description, generateRound);
