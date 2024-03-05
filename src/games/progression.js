import { getRandomInteger, makeProgression } from '../utils.js';
import runGame from '../index.js';

const desc = 'What number is missing in the progression?';

const getQA = () => {
  const progression = makeProgression();
  const hiddenIndex = getRandomInteger(1, (progression.length - 1));
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => runGame(desc, getQA);
