import { getRandomInteger } from '../utils.js';
import runGame from '../index.js';

const desc = 'What number is missing in the progression?';

const getQA = () => {
  let randomFirstNumber = getRandomInteger(1, 90);
  const randomIncrement = getRandomInteger(1, 9);
  const progression = [randomFirstNumber];
  for (let i = 0; i < getRandomInteger(5, 10); i += 1) {
    randomFirstNumber += randomIncrement;
    progression.push(String(randomFirstNumber));
  }
  const hiddenIndex = getRandomInteger(1, (progression.length - 1));
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => runGame(desc, getQA);
