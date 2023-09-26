#!/usr/bin/env node
import getRandomNumber from '../utils.js';
import gamesBase from '../index.js';

const gameTask = `Find a greatest common divisor of two numbers`;

const nod = (a, b) => (b === 0 ? a : nod(b, a % b));
const createdQuestionAndAnswer = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const question = `${number1.toString()} ${number2.toString()}`;
  const correctAnswer = nod(number1, number2).toString();
  return [question, correctAnswer];
};
export default () => gamesBase(gameTask, createdQuestionAndAnswer);
