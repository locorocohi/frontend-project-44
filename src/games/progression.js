import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const makeProgression = () => {
  let randomFirstNumber = getRandomNumber(1, 90);
  const randomIncrement = getRandomNumber(1, 9);
  const progression = [];
  for (let i = 0; i < getRandomNumber(5, 10); i += 1) {
    randomFirstNumber += randomIncrement;
    progression.push(String(randomFirstNumber));
  }
  return progression;
};

const desc = 'What number is missing in the progression?';

const generateRound = () => {
  const progression = makeProgression();
  const hiddenIndex = getRandomNumber(1, (progression.length - 1));
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => runGame(desc, generateRound);
