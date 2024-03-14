import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const question = getRandomNumber(0, 9);
  let answer = '';
  answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(description, generateRound);
