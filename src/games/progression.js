import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const makeProgression = (randomFirstNumber, randomIncrement) => {
  const progression = [];
  for (let i = 0; i < 8; i += 1) {
    // eslint-disable-next-line no-param-reassign
    randomFirstNumber += randomIncrement;
    progression.push(String(randomFirstNumber));
  }
  return progression;
};

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const randomFirstNumber = getRandomNumber(1, 90);
  const randomIncrement = getRandomNumber(1, 20);
  const progression = makeProgression(randomFirstNumber, randomIncrement);
  const hiddenIndex = getRandomNumber(1, progression.length - 1);
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => runGame(description, generateRound);
