#!/usr/bin/env node
import getRandomNumber from '../utils.js';
import gamesBase from '../index.js';

const gameTask = `Calculate the value of the expression`;

const calculate = (number1, number2, operator) => {
  if (operator === '-') {
    return number1 - number2;
  } else if (operator === '+') {
    return number1 + number2;
  } else {
    return number1 * number2;
  }
};
const createdQuestionAndAnswer = () => {
  const number1 = getRandomNumber(0, 10);
  const number2 = getRandomNumber(0, 10);
  const operators = '-+*';
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator).toString();
  return [question, correctAnswer];
};
export default () => gamesBase(gameTask, createdQuestionAndAnswer);
