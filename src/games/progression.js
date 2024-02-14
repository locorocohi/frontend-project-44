import { getRndInt } from '../utils.js';
import runGame from '../index.js';

const desc = 'What number is missing in the progression?';

const getQA = () => {
  let randomFirstNumber = getRndInt(1, 90);
  const randomIncrement = getRndInt(1, 9);
  const progression = [randomFirstNumber];
  for (let i = 0; i < getRndInt(5, 10); i += 1) {
    randomFirstNumber += randomIncrement;
    progression.push(String(randomFirstNumber));
  }
  const positionOfCorrect = getRndInt(1, (progression.length - 1));
  const correctAnswer = progression[positionOfCorrect];
  progression[positionOfCorrect] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => runGame(desc, getQA);
