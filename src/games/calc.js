import { getRandomInteger } from '../utils.js';
import runGame from '../index.js';

const gameDescription = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: ' ${operator} '!`);
  }
};

const getGameData = () => {
  const number1 = getRandomInteger(1, 20);
  const number2 = getRandomInteger(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInteger(0, operators.length - 1)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculate(number1, number2, operator).toString();

  return [question, answer];
};

const game = () => runGame(gameDescription, getGameData);
export default game;
